'use client'

import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import Link from "next/link";

interface IProps {
  icon: ReactNode;
  href: string;
}

const NavLink: FC<IProps> = ({ icon, href }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "hover:bg-main-700 flex h-12 w-12 items-center justify-center rounded-[10px] text-white",
          { "bg-main-700": pathname == href },
        )}
      >
        {icon}
      </Link>
    </li>
  );
};

export default NavLink;
