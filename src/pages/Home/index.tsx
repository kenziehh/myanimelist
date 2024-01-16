import { useEffect, useState } from "react";
import HeroHome from "./HeroHome";
import TopAnime from "./TopAnime";
// import TopAnime from "./TopAnime";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Home() {
  return (
    <>
      <HeroHome />
      <TopAnime />
    </>
  );
}
