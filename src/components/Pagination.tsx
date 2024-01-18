import Button from "./Button";

const Pagination = ({
  page,
  handlePrev,
  handleNext,
}: {
  page: number;
  handlePrev: () => void;
  handleNext: () => void;
}) => {
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
