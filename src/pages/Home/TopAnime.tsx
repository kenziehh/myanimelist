import Card from "@components/Card";
import { Anime } from "@models/anime";
import { useEffect, useState } from "react";

const TopAnime = () => {
  const BASE_URL = "https://api.jikan.moe/v4";
  const [anime, setAnime] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/top/anime?`);
        const animeData = await response.json();
        setAnime(animeData.data);
        console.log(animeData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <section className="container my-10">
      <h2 className="mb-10">Top Animes🔥</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {anime.map((animeItem: Anime) => (
          <Card
            key={animeItem.mal_id}
            imageSrc={animeItem.images.webp.image_url}
            title={animeItem.title}
            rating={animeItem.score}
          />
        ))}
      </div>
    </section>
  );
};

export default TopAnime;
