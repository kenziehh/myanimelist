import { AnimeItem } from "@models/animeItem";
import YoutubePlayer from "./YoutubePlayer";
import { MangaItem } from "@models/mangaItem";

const CardDetail = ({
  withVideo = false,
  data,
}: {
  withVideo?: boolean;
  data?: AnimeItem | MangaItem;
}) => {
  return (
    <section className="container">
      <div className="border-2 border-secGray flex flex-col gap-8 p-10">
        <div
          className={`flex flex-col items-center gap-y-8 ${
            withVideo ? "justify-between" : "justify-center"
          } lg:flex-row`}
        >
          <div className="h-[200px] w-[150px] xl:h-[500px] xl:w-[400px] bg-secGray" />
          {withVideo ? (
            <div className="flex flex-col items-center gap-4">
              <div className="h-60 w-[400px] md:h-[300px] md:w-[400px] xl:w-[600px] 2xl:w-[700px] bg-secGray">
                <YoutubePlayer videoId={data?.trailer.youtube_id??""} />
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-start gap-6 ml-4">
          <div className="bg-secGray px-3 py-1 rounded-md w-64 h-8" />
          <div className="flex gap-2">
            <div className="bg-secGray px-3 py-1 rounded-md h-6 w-16" />
            <div className="bg-secGray px-3 py-1 rounded-md h-6 w-16" />
            <div className="bg-secGray px-3 py-1 rounded-md h-6 w-16" />
          </div>
          <div className="px-64 py-10 lg:px-80 xl:px-[30rem] md:py-20 bg-secGray"></div>
        </div>
      </div>
    </section>
  );
};

export default CardDetail;
