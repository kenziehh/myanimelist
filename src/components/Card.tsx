interface CardProps {
  imageSrc: string;
  title: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, rating }) => {
  return (
    <div className="flex gap-8 items-start flex-col shadow-xl rounded-xl border-black h-[500px]">
      <img className="w-[300px] h-[400px]" src={imageSrc} />
      <div className="flex flex-col">
        <h6>{title}</h6>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default Card;
