import Button from "@components/Button";
import Card from "@components/Card";
import GridContainer from "@components/GridContainer";
import Modal from "@components/Modal";
import SkeletonCard from "@components/loading/SkeletonCard";
import { AnimeItem } from "@models/animeItem";
import { fetchAnimeThisSeason } from "@services/api/getAnimeSeason";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Schedule = () => {
  const [modal, setModal] = useState<AnimeItem>();
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      await wait(1000);
      return fetchAnimeThisSeason();
    },
    queryKey: ["thisSeason"],
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
    const selectedAnime = data?.data.find(
      (animeItem) => animeItem.mal_id === mal_id
    );
    setModal(selectedAnime);
  };
  const handleCloseModal = () => {
    setModal(undefined);
  };

  return (
    <div className="container my-10">
      <h1 className="mb-10">Animes This Season</h1>
      <GridContainer>
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.data.map((animeItem: AnimeItem) => (
              <Card
                key={animeItem.mal_id}
                data={animeItem}
                onClick={handleOpenModal}
              />
            ))}
        {modal && (
          <Modal
            data={modal}
            onClose={handleCloseModal}
            linkTo={`/animes/${modal.mal_id}`}
          />
        )}
      </GridContainer>
    </div>
  );
};

export default Schedule;
