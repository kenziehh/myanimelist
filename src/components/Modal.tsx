import Button from "./Button";
import { useRef } from "react";
import { useOnClickOutside } from "@hooks/UseOnClickOutside";
import { AnimeItem } from "@models/animeItem";
import { MangaItem } from "@models/mangaItem";
import { Link } from "react-router-dom";

interface ModalProps {
  data: AnimeItem | MangaItem;
  onClose?: () => void;
  linkTo?: string;
}

const Modal: React.FC<ModalProps> = ({ data, onClose, linkTo }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  if (onClose) {
    useOnClickOutside(modalRef, onClose);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-32">
      <div
        className="px-10 bg-white flex flex-col md:flex-row py-10 gap-10 rounded-lg overflow-y-auto max-h-[90vh]"
        ref={modalRef}
      >
        <div className="flex-1 flex flex-col items-center gap-6">
          <img src={data.images.webp.image_url} />
          <h3 className="text-center">{data.title}</h3>
        </div>
        <div className="flex-1 flex flex-col justify-between gap-y-8 pr-4">
          <div className="flex-1">
            <p>{data.synopsis}</p>
          </div>
          <div className="flex justify-end">
            <Button variant="default" className="" onClick={onClose}>
              Close
            </Button>
            <Button variant="default" className="">
              <Link to={linkTo ?? ""}> See More Detail</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
