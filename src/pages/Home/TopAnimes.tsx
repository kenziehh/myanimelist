import Button from "@components/Button";
import Card from "@components/Card";
import Modal from "@components/Modal";
import { Anime } from "@models/anime";
import { BASE_URL } from "@services/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopAnimes() {
  const [modal, setModal] = useState<Anime>();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(1000);
      if (isHome) {
        const { data } = await axios.get(`${BASE_URL}/top/anime?limit=10`);
        return data.data as Anime[];
      } else {
        const { data } = await axios.get(`${BASE_URL}/top/anime`);
        return data.data as Anime[];
      }
    },
    queryKey: ["animes"],
  });
  if (isLoading) {
    return <div className="flex justify-center">is Loading...</div>;
  }

  const handleOpenModal = (mal_id: number) => {
    console.log(mal_id);
    const selectedAnime = data?.find(
      (animeItem) => animeItem.mal_id === mal_id
    );
    setModal(selectedAnime);
  };
  const handleCloseModal = () => {
    setModal(undefined);
  };

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
        {data?.map((animeItem: Anime) => (
          <Card
            key={animeItem.mal_id}
            anime={animeItem}
            onClick={handleOpenModal}
          />
        ))}
      </div>
      {modal && <Modal anime={modal} onClose={handleCloseModal} />}
    </section>
  );
}
