const SkeletonCard = () => {
  return (
    <div
      className={`flex gap-8 items-start flex-col shadow-xl rounded-xl border-black h-[500px]`}
    >
      <div className="w-[300px] h-[400px] " />
      <div className="flex flex-col gap-4 pl-4">
        <div className="h-3 w-40 bg-secGray" />
        <div className="h-3 w-12 bg-secGray" />
      </div>
    </div>
  );
};

export default SkeletonCard;
