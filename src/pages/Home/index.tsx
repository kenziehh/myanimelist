import { useEffect, useState } from "react";
import HeroHome from "./HeroHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TopAnime from "./TopAnime";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
      <HeroHome />
      <QueryClientProvider client={queryClient}>
        {/* <TopAnime/> */}
      </QueryClientProvider>
    </>
  );
}
