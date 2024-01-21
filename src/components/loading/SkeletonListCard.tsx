const SkeletonListCard = () => {
  return (
    <div className="mt-8 flex gap-8 w-[675px] items-start">
      <div className="bg-secGray w-10 h-12" />
      <div className="flex flex-col gap-2 h-14 items-start">
        <span className="bg-secGray w-[400px] h-3"/>
        <div className="bg-secGray w-[600px] h-6"/>
      </div>
    </div>
  );
};

export default SkeletonListCard;
