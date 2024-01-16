import Button from "@components/Button";
import Card from "@components/Card";
import { Anime } from "@models/anime";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopAnime = () => {
  const BASE_URL = "https://api.jikan.moe/v4";
  const [anime, setAnime] = useState<Anime[]>([]);
  const location = useLocation();
  const isHome = location.pathname === "/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isHome) {
          const response = await fetch(`${BASE_URL}/top/anime?limit=10`);
          const animeData = await response.json();
          setAnime(animeData.data);
        } else {
          const response = await fetch(`${BASE_URL}/top/anime`);
          const animeData = await response.json();
          setAnime(animeData.data);
        }
      } catch (error) {
        console.error("Error fetching top anime:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mb-10">
      {isHome ? (
        <div></div>
      ) : (
        <Button variant="disabled">
          <Link to="/">Back To Homepage</Link>
        </Button>
      )}
      <div className="flex justify-between items-center my-10">
        <h2 className="">Top Animes🔥</h2>
        {isHome ? (
          <Button variant="disabled">
            <Link to="/animes/topanimes">See All</Link>
          </Button>
        ) : (
          <div></div>
        )}
      </div>
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
