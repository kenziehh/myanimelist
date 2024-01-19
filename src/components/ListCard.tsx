import { truncateText } from "@utils/truncateText";
import { Link } from "react-router-dom";

const ListCard = ({
  image,
  title,
  desc,
  link,
}: {
  image: string;
  title: string;
  desc: string;
  link?: string;
}) => {
  return (
    <Link to={link ?? ""}>
      <div className="flex flex-row gap-4 items-center h-20 py-4 border-slate-200 divide-y max-w-2xl min-w-sm">
        <img src={image} className="w-10 h-14" />
        <div className="text-start">
          <span className="text-primaryBlue">{title}</span>
          <p>{truncateText(desc ?? "", 100)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
