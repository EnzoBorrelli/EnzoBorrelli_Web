"use client"
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
    {
      title: "Home",
      path: "frontend",
    },
    {
      title: "Projects",
      path: "frontend/projects",
    },
    {
      title: "About",
      path: "frontend/about",
    },
    {
      title: "Contact",
      path: "frontend/contact",
    },
  ];

export default function Nav() {
    const [menu, setMenu] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  function togMenu() {
    setMenu(!menu);
    setMenuIcon(!menuIcon);
    console.log(menu);
    console.log(menuIcon);
  }
  return (
    <nav>
        <button
          className="my-3 text-2xl sm:hidden sm:pointer-events-none"
          onClick={togMenu}
        >
          {menuIcon ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
        <ul
          className={`flex flex-wrap flex-col sm:flex-row gap-3 sm:mr-3 h-full items-center justify-center text-xl sm:flex ${
            menu ? "" : "hidden"
          }`}
        >
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
  )
}
