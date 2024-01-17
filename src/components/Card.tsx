import { Anime } from "@models/anime";

interface CardProps {
  anime: Anime;
  onClick?: (malId: number) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ anime, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(anime.mal_id);
    }
  };
  return (
    <div
      className={`flex gap-8 items-start flex-col shadow-xl rounded-xl border-black h-[500px] ${className}`}
      onClick={handleClick}
    >
      <img className="w-[300px] h-[400px]" src={anime.images.webp.image_url} />
      <div className="flex flex-col pl-4">
        <h6>{anime.title}</h6>
        <p>{anime.score}</p>
      </div>
    </div>
  );
};

export default Card;
