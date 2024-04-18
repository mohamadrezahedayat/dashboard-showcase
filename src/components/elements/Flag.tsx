import { FC } from "react";

interface IProps {
  color?: "red" | "green" | "orange" | "yellow" | "blue" | string;
}

const Flag: FC<IProps> = ({ color = "green" }) => {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full outline outline-1 outline-offset-1"
      style={{ outlineColor: color, backgroundColor: color }}
    />
  );
};

export default Flag;
