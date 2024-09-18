import Modal from "react-modal";
import { ImageType } from "../../types";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "5px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

interface ImageModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  selectedImage: ImageType | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isModalOpen,
  closeModal,
  selectedImage,
}) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src={selectedImage?.urls.regular}
          alt={selectedImage?.alt_description}
        />
      </Modal>
    </div>
  );
};
