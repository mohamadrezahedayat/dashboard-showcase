import { FC, PropsWithChildren } from "react";

interface IProps {
  onClick?: () => void;
}
const Button: FC<PropsWithChildren<IProps>> = ({
  onClick = () => {},
  children = "click me",
}) => {
  return (
    <button className="rounded-sm bg-blue-500 px-4 py-1.5 text-sm text-white hover:bg-blue-600">
      {children}
    </button>
  );
};

export default Button;
