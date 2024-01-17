import { Anime } from "@models/anime";
import { Manga } from "@models/manga";

type CardData = Anime | Manga;
interface CardProps {
  data: CardData;
  onClick?: (malId: number) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ data, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(data.mal_id);
    }
  };
  return (
    <div
      className={`flex gap-8 items-start flex-col shadow-xl rounded-xl border-black h-[500px] ${className}`}
      onClick={handleClick}
    >
      <img className="w-[300px] h-[400px]" src={data.images.webp.image_url} />
      <div className="flex flex-col pl-4">
        <h6>{data.title}</h6>
        <p>{data.score}</p>
      </div>
    </div>
  );
};

export default Card;
