import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hedayatnia | Showcase",
  description: "Dakri Cartons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "mt-[6.5rem] flex flex-col md:ml-[6.5rem] md:mt-0 md:flex-row",
        )}
      >
        {/* fix spacing */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
