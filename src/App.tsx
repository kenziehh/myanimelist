import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import RootLayout from "@pages/layout";
import Animes from "@pages/Animes";
import Mangas from "@pages/Mangas";
import TopMangas from "@pages/Home/TopMangas";
import TopAnimes from "@pages/Home/TopAnimes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/animes">
            <Route index element={<Animes />} />
            <Route path="/animes/topanimes" element={<TopAnimes />} />
          </Route>
          <Route path="/mangas">
            <Route index element={<Mangas />} />
            <Route path="/mangas/topmangas" element={<TopMangas />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
