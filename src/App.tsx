import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import RootLayout from "@pages/layout";
import Animes from "@pages/Animes";
import TopAnime from "@pages/Home/TopAnime";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/animes" >
            <Route index  element={<Animes />}/>
            <Route path="/animes/topanimes" element={<TopAnime />}/>
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
