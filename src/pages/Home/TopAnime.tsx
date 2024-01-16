import { Anime } from "@models/anime";
import { useEffect, useState } from "react";

const TopAnime = () => {
  const BASE_URL = "https://api.jikan.moe/v4";
  const [anime, setAnime] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/top/anime`);
        const animeData = await response.json();
        setAnime(animeData.data);
        console.log(animeData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <section className="container my-10">
      <h2 className="mb-10">Top Animes🔥</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {anime.map((animeItem: Anime) => (
          <div
            key={animeItem.title}
            className="flex gap-8 items-start flex-col border-2 rounded-xl border-black"
          >
            <img
              className="w-[300px] h-[400px]"
              src={animeItem.images.webp.image_url}
            />
            <div className="flex flex-col">
              <h6>{animeItem.title}</h6>
              <p>{animeItem.url}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopAnime;
