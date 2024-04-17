import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";

interface IProps {
  bordered?: boolean;
  span?: number;
  title?: string;
  icon?: ReactNode;
}

const Card: FC<PropsWithChildren<IProps>> = ({
  bordered = true,
  span = 1,
  title = "title",
  icon,
}) => {
  return (
    <div
      className={clsx(
        `col-span-3 h-[17.5rem] rounded-[20px] border-solid border-neutral-400 xl:col-span-${span}`,
        { "border-[1px]": bordered },
      )}
    >
      <div className="flex items-center gap-3 px-6 pb-4 pt-5 [&>svg]:h-10 [&>svg]:w-10">
        {icon}
        <h1 className="inline-block text-[28px] font-semibold tracking-[7%] text-[#3F3F3F]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Card;
