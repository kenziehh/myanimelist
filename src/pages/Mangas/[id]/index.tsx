import CardDetail from "@components/CardDetail";
import SkeletonCardDetail from "@components/Loading/SkeletonCardDetail";
import { fetchMangaById } from "@services/api/getMangaById";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const MangaDetails = () => {
  const { id } = useParams<string>();
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      if (id) {
        await wait(3000);
        const mangaId = parseInt(id, 10);
        return fetchMangaById(mangaId); 
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
      <CardDetail data={data} key={data?.mal_id}/>
      {data?.title}
    </div>
  );
};

export default MangaDetails;
