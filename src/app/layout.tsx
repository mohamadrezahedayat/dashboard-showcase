import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hedayatnia | Showcase",
  description: "dakri Cartons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "flex md:flex-row flex-col")}>
        {/* fix spacing */}
        <nav className="bg-main-400 h-[6.5rem] md:h-dvh md:min-w-[6.5rem] flex items-center md:flex-col justify-between md:py-10">
          <div className="w-[60px] h-[60px] bg-white shadow-md"/>
          <ul className="flex md:flex-col">
            <li>home</li>
            <li>tools</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
          <button className="rounded-full bg-white w-[60px] h-[60px] shadow-md"></button>
        </nav>
        {children}
      </body>
    </html>
  );
}
