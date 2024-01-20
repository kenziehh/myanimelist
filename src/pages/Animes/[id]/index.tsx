import CardDetail from "@components/CardDetail";
import SkeletonCardDetail from "@components/Loading/SkeletonCardDetail";
import { fetchAnimeById } from "@services/api/getAnimeById";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { id } = useParams<string>();
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      if (id) {
        await wait(3000);
        const mangaId = parseInt(id, 10);
        return fetchAnimeById(mangaId);
      }
    },
    queryKey: [id],
    enabled: Boolean(id),
  });

  if (isLoading) {
    return <SkeletonCardDetail />;
  }

  if (isError) {
    return <div>Error fetching manga details</div>;
  }

  return (
    <div>
      <CardDetail withVideo={true} data={data} key={data?.mal_id} />
      {data?.title}
    </div>
  );
};

export default AnimeDetails;
