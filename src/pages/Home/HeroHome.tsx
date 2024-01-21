import HeroImage from "/assets/images/heroimage.png";
import Button from "@components/Button";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <section className="container flex flex-col-reverse lg:flex-row justify-between items-center gap-16 my-10">
      <div className="flex flex-col gap-12 items-center text-center lg:text-start lg:items-start">
        <h1>Explore All Animes and Mangas In This Website </h1>
        <p className="max-w-[450px]">
          Access all information about animes and mangas and meet your online
          animanga community in here
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Button className="hover:scale-105">
            <Link to="/animes" className="flex items-center gap-4">
              Explore Anime <BiSearch />
            </Link>
          </Button>
          <Button variant="default" className="hover:scale-105">
            <Link to="/mangas" className="flex items-center gap-4">
              Explore Manga <BiSearch />
            </Link>
          </Button>
        </div>
      </div>
      <img src={HeroImage} className="max-w-[600px]" />
    </section>
  );
};

export default HeroHome;
