import { ImageType} from "../../types";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";



interface ImageGalleryProps {
  images: ImageType[];
  openModal: (modalImage: ImageType) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
