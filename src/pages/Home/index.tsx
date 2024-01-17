import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeroHome from "./HeroHome";
import TopAnimes from "./TopAnimes";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
      <HeroHome />
      <QueryClientProvider client={queryClient}>
        <TopAnimes />
      </QueryClientProvider>
    </>
  );
}
