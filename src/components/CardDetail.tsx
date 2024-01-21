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
      <div className="border-2 shadow-md rounded-xl flex flex-col gap-8 p-10">
        <div
          className={`flex flex-col items-center gap-y-8 ${
            withVideo ? "justify-between" : "justify-center"
          } lg:flex-row`}
        >
          <div className="flex justify-start items-center md:items-start gap-6">
            <img
              src={data?.images.webp.image_url}
              className="h-[200px] w-[150px] xl:h-[100px] xl:w-[70px]"
            />
            <div className="flex flex-col gap-4">
              <h1>{data?.title}</h1>
              <ul className="flex flex-col md:flex-row gap-4 items-start">
                <li className="bg-secBlue px-3 py-1 rounded-md">18+</li>
                <li className="bg-secBlue px-3 py-1 rounded-md">
                  slice of life
                </li>
                <li className="bg-secBlue px-3 py-1 rounded-md">mature</li>
                <li className="bg-secBlue px-3 py-1 rounded-md">adventure</li>
              </ul>
            </div>
          </div>

          <div></div>
        </div>
        {withVideo ? (
          <div className="flex flex-col items-center gap-4">
            <YoutubePlayer videoId={data?.trailer.youtube_id ?? ""} />
          </div>
        ) : null}
        <div className="flex flex-col items-start gap-6 ml-4">
          <div className="flex gap-2">
            <div className="bg-secBlue px-3 py-1 rounded-md">
              Rank#{data?.rank}
            </div>
            <div className="bg-secBlue px-3 py-1 rounded-md">
              Popularity#{data?.popularity}
            </div>
            <div className="bg-secBlue px-3 py-1 rounded-md">
              Score:{data?.score}
            </div>
          </div>
          <div className="bg-secBlue p-8 rounded-xl">{data?.synopsis}</div>
        </div>
      </div>
    </section>
  );
};

export default CardDetail;
