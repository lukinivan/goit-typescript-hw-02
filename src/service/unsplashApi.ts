import axios, { AxiosResponse } from "axios";
import { transformResults } from "../helpers/transformResults";
import { ImageType } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com/";

interface UnsplashResponse {
  results: ImageType[];
  total: number;
  total_pages: number;
}

export const getImages = async (query: string, page: number): Promise<{ images: ImageType[], totalImages: number, totalPages: number }> => {
  try {
    const response: AxiosResponse<UnsplashResponse> = await axios.get("/search/photos", {
      params: {
        client_id: "JQpHbQDnF_EZQssfDG5Gsbj0N4Gq2Q80Yi0DqM79H6g",
        query,
        page,
        per_page: 20,
        orientation: "landscape",
      },
    });

    const images = transformResults(response.data.results);

    return { 
      images, 
      totalImages: response.data.total, 
      totalPages: response.data.total_pages 
    };
  } catch (error) {
    throw new Error("Failed to fetch images from Unsplash API."); 
  }
};
