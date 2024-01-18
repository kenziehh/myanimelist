import InputSearch from "@components/InputSearch";

export default function Mangas() {
  return (
    <>
      <section className="container flex justify-center">
        <InputSearch placeHolder="Search Anime Here" type="manga" />
      </section>
    </>
  );
}
