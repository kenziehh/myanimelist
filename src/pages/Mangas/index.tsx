import InputSearch from "@components/InputSearch";
import AllTopMangas from "./AllTopMangas";
import SkeletonCardDetail from "@components/Loading/SkeletonCardDetail";

export default function Mangas() {
  return (
    <>
      <InputSearch placeHolder="Search Manga Here" type="manga" />
      <SkeletonCardDetail />
      <AllTopMangas />
    </>
  );
}
