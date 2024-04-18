import { FC, PropsWithChildren } from "react";

interface IProps {
  columns: string[];
}

const Table: FC<PropsWithChildren<IProps>> = ({ children, columns }) => {
  return (
    <table className="w-full text-left text-sm text-neutral-400">
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
