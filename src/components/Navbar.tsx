"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import NavLink from "./NavLink";
import useModal from "@/hooks/useModal";
import HomeIcon from "./icons/home-icon";
import MenuIcon from "./icons/menu-icon";
import ChartIcon from "./icons/chart-icon";
import ToolsIcon from "./icons/tools-icon";
import SettingsIcon from "./icons/settings-icon";
import AnalyticsIcon from "./icons/analytics-icon";

const Navbar = () => {
  const [sideOpen, setsideOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useModal(() => setsideOpen(false), ref);
  return (
    <>
      {/* vertical navbar */}
      <nav
        ref={ref}
        className={clsx(
          "fixed bottom-0 left-0 top-0 flex h-dvh w-0 flex-col  items-center justify-start overflow-hidden bg-main-400 py-10 md:min-w-[6.5rem]",
          { "min-w-[6.5rem]": sideOpen },
        )}
      >
        <div className="mb-[140px] h-[60px] w-[60px] bg-white shadow-md">
          <Image
            src="/logo.png"
            alt="dakri cartoons logo"
            width={60}
            height={60}
          />
        </div>
        <div className="flex basis-full flex-col items-center justify-between">
          <ul className="flex flex-col gap-2.5">
            <NavLink icon={<HomeIcon />} href="/" />
            <NavLink icon={<ToolsIcon />} href="#" />
            <NavLink icon={<AnalyticsIcon />} href="#" />
            <NavLink icon={<ChartIcon />} href="#" />
          </ul>
          <button className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-black shadow-md hover:shadow-xl">
            <SettingsIcon className="transition-transformhover:rotate-360 h-8 w-8 transition-transform duration-300 hover:rotate-180" />
          </button>{" "}
        </div>
      </nav>
      {/* horizontal navbar */}
      {!sideOpen && (
        <nav className="fixed left-0 right-0 top-0 flex h-16 items-center overflow-hidden bg-main-400 pl-5 md:h-0">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-[10px] text-white hover:bg-main-700"
            onClick={() => setsideOpen(true)}
          >
            <MenuIcon />
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
