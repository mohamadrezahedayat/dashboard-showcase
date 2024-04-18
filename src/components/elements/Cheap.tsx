import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

const Cheap: FC<PropsWithChildren<IProps>> = ({
  className = "",
  children = "cheap",
}) => {
  return (
    <span
      className={clsx(
        "inline-block rounded-sm bg-neutral-100 px-3 py-0.5 font-semibold text-neutral-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Cheap;
