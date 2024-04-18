import { clsx } from "clsx";
import { FC, PropsWithChildren } from "react";

interface IProps {
  columns: string[];
  className?: string;
}

const Table: FC<PropsWithChildren<IProps>> = ({
  children,
  columns,
  className,
}) => {
  return (
    <table
      className={clsx("w-full text-left text-sm text-neutral-400", className)}
    >
      <thead className="h-8 border-b-[1px] border-neutral-200 ">
        <tr>
          {columns.map((col, id) => (
            <th key={col + id}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
