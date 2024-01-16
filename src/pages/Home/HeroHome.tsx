import HeroImage from "/assets/images/heroimage.png";
import Button from "@components/Button";
import { BiSearch } from "react-icons/bi";

const HeroHome = () => {
  return (
    <section className="container flex flex-col-reverse lg:flex-row justify-between items-center gap-16 my-10">
      <div className="flex flex-col gap-12 items-center text-center lg:text-start lg:items-start">
        <h1>Explore All Animes and Mangas In This Website </h1>
        <p className="max-w-[450px]">
          Access all information about animes and mangas and meet your online
          animanga community in here
        </p>
        <Button className="hover:scale-105">
          Find Anime <BiSearch />
        </Button>
      </div>
      <img src={HeroImage} className="max-w-[600px]" />
    </section>
  );
};

export default HeroHome;
