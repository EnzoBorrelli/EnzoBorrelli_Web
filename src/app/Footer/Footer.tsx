import React from "react";
import localFont from "next/font/local";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";

const myFont = localFont({
  src: "ender-font.ttf",
});

const Socials = [
  {
    icon: <FaGithubSquare />,
    url: "https://github.com/EnzoBorrelli",
    color: "hover:text-white",
  },
  {
    icon: <GrLinkedin />,
    url: "https://linkedin.com/in/enzoborrelli",
    color: "hover:text-sky-600",
  },
  {
    icon: <IoLogoWhatsapp />,
    url: "https://wa.link/35dp71",
    color: "hover:text-green-500",
  },
  {
    icon: <FaSquareInstagram />,
    url: "https://www.instagram.com/ender_devlogs/",
    color: "hover:text-pink-500",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full h-24 sm:max-h-10 flex flex-col flex-nowrap items-center sm:flex-row sm:justify-between sm:px-4">
      <h1 className={`${myFont.className} text-xl text-center my-4`}>
        ©Enzo Borrelli - 2023
      </h1>
      <nav>
        <ul className="flex flex-wrap flex-row gap-3 mb-4 sm:mt-4">
          {Socials.map((social, index) => (
            <li key={index}>
              <a
                className={`text-3xl ${social.color} hover:text-5xl hover:mb-1 transition-all duration-200 ease-in `}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
