import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import { fetchSearch5Anime } from "@services/api/SearchAnime";
import { RxCross2 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { fetchSearch5Manga } from "@services/api/SearchManga";
import ListCard from "./ListCard";
import { Link } from "react-router-dom";
import { AnimeItem } from "@models/animeItem";
import { MangaItem } from "@models/mangaItem";

interface InputSearchProps {
  placeHolder?: string;
  type?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ placeHolder, type }) => {
  const [searchResult, setSearchResult] = useState<AnimeItem[] | MangaItem[]>();
  const searchRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      const searchValue = searchRef.current?.value;
      console.log(searchValue);
      if (searchValue) {
        await wait(1000);
        if (type === "anime") {
          const animeData = await fetchSearch5Anime(searchValue);
          return animeData;
        } else {
          const mangaData = await fetchSearch5Manga(searchValue);
          return mangaData;
        }
      }
    },
    queryKey: ["searchResult"],
    enabled: false,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const searchValue = searchRef.current?.value;
      if (searchValue) {
        refetch();
        setIsOpen(true);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchRef.current?.value]);

  useEffect(() => {
    if (data) {
      setSearchResult(data);
    } else {
      setSearchResult(undefined);
    }
  }, [data]);

  const handleSearchIcon = async () => {
    const searchValue = searchRef.current?.value;
    if (searchValue) {
      await refetch();
      setIsOpen(true);
    }
  };

  const handleClearIcon = () => {
    searchRef.current && (searchRef.current.value = "");
    setIsOpen(false);
    setSearchResult(undefined);
  };

  return (
    <div className="flex items-center flex-col my-10">
      <div className="flex flex-col rounded-sm px-2 items-center justify-between">
        <div>
          <input
            className="text-center py-1 px-4"
            type="text"
            placeholder={placeHolder}
            ref={searchRef}
            onChange={() => refetch()}
          />
          <button className="py-1 px-2">
            {isOpen ? (
              <RxCross2 onClick={handleClearIcon} />
            ) : (
              <BiSearch onClick={handleSearchIcon} />
            )}
          </button>
        </div>

        <div className="flex flex-col">
          {isOpen
            ? searchResult?.map((resultData: AnimeItem | MangaItem) => (
                <ListCard
                  key={resultData.mal_id}
                  image={resultData.images.webp.small_image_url}
                  title={resultData.title}
                  desc={resultData.synopsis}
                  link={resultData.mal_id.toString()}
                />
              ))
            : null}
        </div>
      </div>
      {isError && (
        <div className="flex flex-col items-center">
          <p className="text-red-500 mb-4">Error fetching data</p>
          <Button onClick={() => refetch()} variant="primary">
            Retry
          </Button>
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center text-md">Finding...</div>
      )}
      <div>
        {isOpen && (searchResult?.length ?? 0) > 0 ? (
          <Link to="" className="text-primaryBlue">
            View All Results
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default InputSearch;
