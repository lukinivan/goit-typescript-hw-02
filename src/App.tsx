import { useEffect, useState } from "react";
import {
  Container,
  ImageGallery,
  ImageModal,
  LoadMore,
  Loader,
  SearchBar,
  ErrorMessage,
} from "./components";
import { getImages } from "./service/unsplashApi";

import toast, { Toaster } from "react-hot-toast";
import { ImageType} from "./types";


const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageType[]>([]);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isLoading, setLoader] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoader(true);
        const { images, totalImages, totalPages } = await getImages(
          query,
          page
        );

        if (!totalImages) {
          setIsEmpty(true);
          return;
        }

        setImages((prev) => [...prev, ...images]);
        setShowLoadMore(page < totalPages);
      } catch (error: unknown) {
        if (error instanceof Error) {
          notify(error.message);
        } else {
          notify("An unexpected error occurred.");
        }
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query, page]);

  const onSubmit = (query: string) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (largeImage: ImageType) => {
    setIsModalOpen(true);
    setSelectedImage(largeImage);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const notify = (errorMessage: string) => toast.error(errorMessage);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Container>
        {images.length > 0 && (
          <ImageGallery images={images} openModal={handleOpenModal} />
        )}
        {showLoadMore && <LoadMore onClick={handleLoadMore} />}
        {isLoading && <Loader />}
        {isEmpty && <ErrorMessage />}
        <Toaster />

        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={handleCloseModal}
          selectedImage={selectedImage}
        />
      </Container>
    </>
  );
};

export default App;
