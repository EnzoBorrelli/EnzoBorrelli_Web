"use client"
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
    {
      title: "Home",
      path: "/video",
    },
    {
      title: "Videos",
      path: "/video/videos",
    },
    {
      title: "About",
      path: "/video/about",
    },
    {
      title: "Contact",
      path: "/video/contact",
    },
  ];

export default function Nav() {
    const [menu, setMenu] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  function togMenu() {
    setMenu(!menu);
    setMenuIcon(!menuIcon);
  }
  return (
    <nav className="bg-gradient-to-b sm:bg-gradient-to-t from-pink-600 to-slate-800 sm:py-2">
        <button
          className="my-3 text-2xl sm:hidden sm:pointer-events-none"
          onClick={togMenu}
        >
          {menuIcon ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
        <ul
          className={`flex flex-wrap flex-col sm:flex-row sm:gap-3 sm:mr-3 w-full h-full items-center justify-center text-xl sm:flex ${
            menu ? "" : "hidden"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="bg-gradient-to-t from-pink-600 to-rose-400 sm:bg-none w-full sm:w-fit flex justify-center py-2 sm:py-0 shadow-sm shadow-rose-700 sm:shadow-none">
              <Link
                className="relative font-bold text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pink-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  )
}
