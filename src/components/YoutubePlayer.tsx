import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }: { videoId: string }) => {
  const opts = {
    width: "300",
    height: "250",
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={opts}/>
    </div>
  );
};

export default YoutubePlayer;
