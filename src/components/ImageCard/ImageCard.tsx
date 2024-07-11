import { ImageType } from "../../types";
import css from "./ImageCard.module.css";



interface Props {
  image: ImageType;
  openModal: (image: ImageType) => void;
}

export const ImageCard: React.FC<Props> = ({ image, openModal }) => {
  
  return (
    <div className={css.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};
