import AuthNavButton from "./AuthNavButton";

const Navbar = () => {
  return (
    <nav className="sticky py-4 container flex justify-between items-center">
      <h3>KenzieAnimeList</h3>
      <div>Navitem</div>
      <AuthNavButton />
    </nav>
  );
};

export default Navbar;
