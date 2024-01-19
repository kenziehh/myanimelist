import Button from "@components/Button";
import Card from "@components/Card";
import Modal from "@components/Modal";
import Pagination from "@components/Pagination";
import { AnimeItem } from "@models/animeItem";
import { fetchTop10Animes, fetchTopAnimes } from "@services/api/TopAnime";
import { useQuery } from "@tanstack/react-query";
import {  useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopAnimes() {
  const [modal, setModal] = useState<AnimeItem>();
  const [page, setPage] = useState<number>(1);
  const location = useLocation();
  const isAll = location.pathname === "/animes/topanimes";
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      await wait(1000);
      console.log(page);
      
      return isAll ? fetchTopAnimes(page) : fetchTop10Animes();
    },
    queryKey: ["topanimes",page],
  });
  if (isLoading) {
    return <div className="flex justify-center mt-32">is Loading...</div>;
  }
  if (isError) {
    return (
      <div className="flex flex-col items-center">
        <p className="text-red-500 mb-4">Error fetching data</p>
        <Button onClick={() => refetch()} variant="primary">
          Retry
        </Button>
      </div>
    );
  }
  const handleOpenModal = (mal_id: number) => {
    const selectedAnime = data?.data.find(
      (animeItem) => animeItem.mal_id === mal_id
    );
    setModal(selectedAnime);
  };
  const handleCloseModal = () => {
    setModal(undefined);
  };


  return (
    <section className="container mb-10">
      <div className="flex justify-between items-center my-10">
        <h2 className="">Top Animes🔥</h2>
        {isAll ? (
          <div></div>
        ) : (
          <Button variant="disabled">
            <Link to="/animes/topanimes">See All</Link>
          </Button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {data?.data.map((animeItem: AnimeItem) => (
          <Card
            key={animeItem.mal_id}
            data={animeItem}
            onClick={handleOpenModal}
          />
        ))}
      </div>
      {modal && <Modal data={modal} onClose={handleCloseModal} />}
      {isAll ? (
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={data?.pagination.last_visible_page ?? 2}
        />
      ) : (
        <div></div>
      )}
    </section>
  );
}
