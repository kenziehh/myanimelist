import { Anime } from "@models/anime";
import Button from "./Button";
import { useRef } from "react";
import { useOnClickOutside } from "@hooks/UseOnClickOutside";

interface ModalProps {
  anime: Anime;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ anime, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  if (onClose) {
    useOnClickOutside(modalRef, onClose);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-32">
      <div className="bg-white flex flex-col md:flex-row py-10 gap-10" ref={modalRef}>
        <div className="flex-1 flex flex-col items-center gap-6">
          <img src={anime.images.webp.image_url} />
          <h3>{anime.title}</h3>
        </div>
        <div className="flex-1 flex flex-col justify-between pr-4">
          <div className="flex-1">
            <p>{anime.synopsis}</p>
          </div>
          <div className="flex justify-end">
            <Button variant="default" className="" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;