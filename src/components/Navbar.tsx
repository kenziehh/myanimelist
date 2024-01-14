import AuthNavButton from "./AuthNavButton";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center">
      <h3>KenzieAnimeList</h3>
      <div>Navitem</div>
      <AuthNavButton />
    </nav>
  );
};

export default Navbar;
