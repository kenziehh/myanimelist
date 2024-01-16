export interface AnimeCardProps{
  title:string
  
}


const AnimeCard = () => {
  return (
    <div>
      <img src="https://placekitten.com/200/300" className="w-52 h-60"/>
      <div>
        <div>title</div>
        <div></div>
      </div>
    </div>
  );
};

export default AnimeCard;
