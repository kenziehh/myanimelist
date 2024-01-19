import InputSearch from "@components/InputSearch";
import AllTopMangas from "./AllTopMangas";

export default function Mangas() {
  return (
    <>
      <InputSearch placeHolder="Search Manga Here" type="manga" />
      <AllTopMangas />
    </>
  );
}
