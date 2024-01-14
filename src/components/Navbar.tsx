import { Link, useLocation } from "react-router-dom";
import AuthNavButton from "./AuthNavButton";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: any) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky py-4 container flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <h3>KenzieAnimeList</h3>
      </Link>
      <div className="flex gap-12 text-secGray">
        <Link
          to="/"
          className={`hover:text-primaryGray ${
            isActive("/") ? "text-primaryBlue" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/animes"
          className={`hover:text-primaryGray ${
            isActive("/animes") ? "text-primaryBlue" : ""
          }`}
        >
          Animes
        </Link>
        <Link
          to="/about"
          className={`hover:text-primaryGray ${
            isActive("/about") ? "text-primaryBlue" : ""
          }`}
        >
          About
        </Link>
      </div>
      <AuthNavButton />
    </nav>
  );
};

export default Navbar;
