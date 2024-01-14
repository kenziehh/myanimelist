interface SeparatorProps {
  type: "vertical" | "horizontal";
  color?: string;
  thickness?: number;
  length?: number;
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  type,
  color = "gray",
  thickness = 1,
  length = 32,
  className,
}) => {
  const separatorStyle: React.CSSProperties = {
    borderBottom:
      type === "horizontal" ? `${thickness}px solid ${color}` : "none",
    borderRight: type === "vertical" ? `${thickness}px solid ${color}` : "none",
    width: type === "vertical" ? thickness : "100%",
    height: type === "horizontal" ? thickness : length,
    margin: 0,
  };

  return <div style={separatorStyle} className={className}></div>;
};

export default Separator;
