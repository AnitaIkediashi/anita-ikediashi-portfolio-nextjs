import type { Metadata } from "next";
import { Inconsolata, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const incosolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anita Ikediashi | Personal Portfolio",
  description: "My personal portfolio built with Next js and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body
        className={`${incosolata.className} bg-color-blue-400  text-color-white overflow-x-hidden  `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
