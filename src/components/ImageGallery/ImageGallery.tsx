import { ImageType, ModalImage } from "../../types";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";



type Props = {
  images: ImageType[];
  openModal: (modalImage: ModalImage) => void;
}

export const ImageGallery = ({ images, openModal }: Props) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard {...image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
