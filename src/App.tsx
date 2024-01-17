import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import RootLayout from "@pages/layout";
import Animes from "@pages/Animes";
import TopAnime from "@pages/Home/TopAnime";
import Mangas from "@pages/Mangas";
import TopManga from "@pages/Home/TopManga";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/animes">
            <Route index element={<Animes />} />
            <Route path="/animes/topanimes" element={<TopAnime />} />
          </Route>
          <Route path="/mangas">
            <Route index element={<Mangas />} />
            <Route path="/mangas/topmangas" element={<TopManga />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
