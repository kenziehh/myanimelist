import Button from "@components/Button";
import Card from "@components/Card";
import SkeletonCard from "@components/loading/SkeletonCard";
import Modal from "@components/Modal";
import Pagination from "@components/Pagination";
import { MangaItem } from "@models/mangaItem";
import { fetchTop10Mangas, fetchTopMangas } from "@services/api/TopManga";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopMangas() {
  const [modal, setModal] = useState<MangaItem>();
  const [page, setPage] = useState<number>(1);
  const location = useLocation();
  const isAll = location.pathname === "/mangas/topmangas";
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      await wait(1000);
      return isAll ? fetchTopMangas(page) : fetchTop10Mangas();
    },
    queryKey: ["topmangas", page],
  });

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
    const selectedManga = data?.data.find(
      (data: MangaItem) => data.mal_id === mal_id
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
        {!isAll ? (
          <Button variant="disabled">
            <Link to="/mangas/topmangas">See All</Link>
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.data.map((mangaItem: MangaItem) => (
              <Card
                key={mangaItem.mal_id}
                data={mangaItem}
                onClick={handleOpenModal}
              />
            ))}
      </div>
      {modal && <Modal data={modal} onClose={handleCloseModal} linkTo={`/mangas/${modal.mal_id}`}  />}

      {isAll ? (
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={data?.pagination.last_visible_page ?? 1}
        />
      ) : (
        <div></div>
      )}
    </section>
  );
}
