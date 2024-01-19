import InputSearch from "@components/InputSearch";
import TopMangas from "@pages/Home/TopMangas";

export default function Mangas() {
  return (
    <>
      <InputSearch placeHolder="Search Anime Here" type="manga" />
      <TopMangas />
    </>
  );
}
