import { ImageType, ModalImage } from "../../types";
import css from "./ImageCard.module.css";



type Props = {
  regular: string;
  small: string;
  alt_description: string;
  openModal: (modalImage: ModalImage) => void;
}

export const ImageCard = ({ regular, small, alt_description, openModal }: Props) => {
  return (
    <div className={css.imageCard}>
      <img
        src={small}
        alt={alt_description}
        onClick={() => openModal({ regular, alt_description })}
      />
    </div>
  );
};
