"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "ender-font.ttf",
});

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

export default function Header() {
  return (
    <header className="bg-slate-900 p-2 flex flex-nowrap flex-row justify-between">
      <div className=" px-2 flex flex-wrap flex-row items-center">
        <Image src="/images/logo.webp" width={50} height={50} alt="logo" />
        <Link href="/">
          <h1
            className={`${myFont.className} text-2xl text-center mx-1 mt-2 hover:text-slate-400`}
          >
            Enzo Borrelli
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex flex-nowrap flex-row gap-3 h-full items-center mr-3">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="relative font-bold text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
