import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }: { videoId: string }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  let opts = {};
  if (isSmallScreen) {
    opts = {
      width: "300px",
      height: "200px",
    };
  } else if (isMediumScreen) {
    opts = {
      width: "400px",
      height: "300px",
    };
  } else if (isLargeScreen) {
    opts = {
      width: "600px",
      height: "350px",
    };
  } else {
    opts = {
      width: "700px",
      height: "400px",
    };
  }
  return <YouTube videoId={videoId} opts={opts} />;
};

export default YoutubePlayer;
