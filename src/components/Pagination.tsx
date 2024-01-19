import Button from "./Button";

const Pagination = ({
  page,
  setPage,
  lastPage,
}: {
  page: number;
  lastPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const backToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNext = () => {
    if (page < lastPage) {
      setPage((prevPage) => prevPage + 1);
      backToTop();
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      backToTop();
    }
  };
  return (
    <div className="flex justify-between mt-4">
      <Button variant="default" onClick={handlePrev}>
        Prev
      </Button>
      <p>{page}</p>
      <Button variant="default" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
