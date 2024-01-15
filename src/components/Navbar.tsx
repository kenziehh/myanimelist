import { Link, useLocation } from "react-router-dom";
import AuthNavButton from "./AuthNavButton";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: any) => {
    return location.pathname === path;
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky container py-[30px] flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <h3>KenzieAnimeList</h3>
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`items-center cursor-pointer lg:hidden transition-all duration-500 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <FaBars name={isOpen ? "close" : "menu"} size={40} />
      </div>
      <div
        className={`items-center cursor-pointer lg:hidden z-10 transition-all duration-1000 ${
          isOpen ? "z-10" : "hidden"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxCross1 size={40} />
      </div>
      <div
        className={`flex items-start flex-1 justify-end flex-col gap-8 lg:flex lg:flex-row lg:items-center absolute lg:static py-20 lg:py-0 bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
          isOpen ? "top-0 " : "top-[-490px]"
        }`}
      >
        <div className="flex flex-col gap-8 items-start lg:flex lg:flex-row lg:gap-6 flex-1 justify-center text-secGray">
          <Link
            to="/"
            className={`hover:scale-105 hover:text-primaryGray ${
              isActive("/") ? "text-primaryBlue" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/animes"
            className={`hover: scale-105 hover:text-primaryGray ${
              isActive("/animes") ? "text-primaryBlue" : ""
            }`}
          >
            Animes
          </Link>
          <Link
            to="/about"
            className={`hover: scale-105 hover:text-primaryGray ${
              isActive("/about") ? "text-primaryBlue" : ""
            }`}
          >
            About
          </Link>
        </div>
        <AuthNavButton className="flex flex-col" />
      </div>
    </nav>
  );
};

export default Navbar;
