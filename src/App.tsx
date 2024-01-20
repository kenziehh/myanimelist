import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import RootLayout from "@pages/layout";
import Animes from "@pages/Animes";
import Mangas from "@pages/Mangas";
import AllTopMangas from "@pages/Mangas/AllTopMangas";
import AllTopAnimes from "@pages/Animes/AllTopAnimes";
import MangaDetails from "@pages/Mangas/[id]";
import AnimeDetails from "@pages/Animes/[id]";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/animes">
            <Route index element={<Animes />} />
            <Route path="/animes/topanimes" element={<AllTopAnimes />} />
            <Route path="/animes/:id" element={<AnimeDetails />} />
          </Route>
          <Route path="/mangas">
            <Route index element={<Mangas />} />
            <Route path="/mangas/topmangas" element={<AllTopMangas />} />
            <Route path="/mangas/:id" element={<MangaDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
