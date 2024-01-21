import Card from "@components/Card";
import InputSearch from "@components/InputSearch";
import Modal from "@components/Modal";
import SkeletonCard from "@components/loading/SkeletonCard";
import { AnimeItem } from "@models/animeItem";
import { MangaItem } from "@models/mangaItem";
import { fetchSearchManga } from "@services/api/SearchManga";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SearchResult = ({ type }: { type: string }) => {
  const { title } = useParams<string>();
  const [modal, setModal] = useState<MangaItem | AnimeItem>();

  const { data, isLoading, isError } = useQuery<MangaItem[]>({
    queryFn: async () => {
      if (title) {
        const mangaData = await fetchSearchManga(title);
        return mangaData;
      }
      return [];
    },
    queryKey: [`search${type}`, title],
  });

  if (isError) {
    return <div>Error fetching </div>;
  }

  const handleOpenModal = (mal_id: number) => {
    const selectedManga = data?.find((item) => item.mal_id === mal_id);
    setModal(selectedManga);
  };

  const handleCloseModal = () => {
    setModal(undefined);
  };

  return (
    <div className="container my-10">
      <InputSearch type={type} placeHolder={`Search Your ${type}`} />
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.map((dataItem: MangaItem | AnimeItem) => (
              <Card
                key={dataItem.mal_id}
                data={dataItem}
                onClick={() => handleOpenModal(dataItem.mal_id)}
              />
            ))}
      </div>
      {modal && (
        <Modal
          data={modal}
          onClose={handleCloseModal}
          linkTo={`/${type}/${modal.mal_id}`}
        />
      )}
    </div>
  );
};

export default SearchResult;
