import InputSearch from "@components/InputSearch";

const SearchAnime = () => {
  return (
    <section className="container flex justify-center">
      <InputSearch placeHolder="Search Anime Here" type="anime" queryKey="searchAnime"/>
    </section>
  );
};

export default SearchAnime;
