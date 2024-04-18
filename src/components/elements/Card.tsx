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
  children
}) => {
  return (
    <div
      className={clsx(
        "col-span-3 flex h-[17.5rem] flex-col rounded-[20px] border-solid  border-neutral-400 pb-8",
        { "xl:col-span-1": span === 1 },
        { "xl:col-span-2": span === 2 },
        { "border-[1px]": bordered },
      )}
    >
      <div className="flex items-center gap-3 px-6 pb-4 pt-5 [&>svg]:h-10 [&>svg]:w-10">
        {icon}
        <h1 className="inline-block text-[28px] font-semibold tracking-[7%] text-[#3F3F3F]">
          {title}
        </h1>
      </div>
      <div className="basis-full overflow-y-auto px-11">
        {children}
      </div>
    </div>
  );
};

export default Card;
