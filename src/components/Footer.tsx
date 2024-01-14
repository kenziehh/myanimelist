import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full bg-darkBlue ">
      <div className="container text-white flex flex-col md:flex-row justify-center gap-x-96 gap-y-16 p-16">
        <div className="flex flex-col gap-6">
          <h4>KenzieAnimeList</h4>
          <p className="max-w-96">
            Web ini merupakan web yang dibuat menggunakan api dari{" "}
            <a
              className="underline"
              href="https://myanimelist.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              myanimelist.net
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="font-bold">Navigation</span>
          <div className="flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/animes">Animes</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
