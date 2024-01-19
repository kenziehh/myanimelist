import Button from "@components/Button";
import Card from "@components/Card";
import Modal from "@components/Modal";
import { Manga } from "@models/manga";
import { fetchTop10Mangas, fetchTopMangas } from "@services/api/TopManga";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopMangas() {
  const [modal, setModal] = useState<Manga>();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      await wait(1000);
      return isHome ? fetchTop10Mangas() : fetchTopMangas();
    },
    queryKey: ["mangas"],
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
    console.log(mal_id);
    const selectedManga = data?.find(
      (mangaItem) => mangaItem.mal_id === mal_id
    );
    setModal(selectedManga);
  };
  const handleCloseModal = () => {
    setModal(undefined);
  };

  return (
    <section className="container mb-10">
      <div className="flex justify-between items-center my-10">
        <h2 className="">Top Mangas📚</h2>
        {isHome ? (
          <Button variant="disabled">
            <Link to="/mangas/topmangas">See All</Link>
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {data?.map((mangaItem: Manga) => (
          <Card
            key={mangaItem.mal_id}
            data={mangaItem}
            onClick={handleOpenModal}
          />
        ))}
      </div>
      {modal && <Modal data={modal} onClose={handleCloseModal} />}
    </section>
  );
}
