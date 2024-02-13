import React from "react";
import localFont from "next/font/local";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const myFont = localFont({
  src: "ender-font.ttf",
});

const Socials = [
  {
    name: "GitHub",
    icon: <FiGithub />,
    url: "https://github.com/EnzoBorrelli",
    color: "hover:text-white hover:bg-black",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/enzoborrelli",
    color: "hover:text-white hover:bg-sky-600",
  },
  {
    name: "WhatsApp",
    icon: <IoLogoWhatsapp />,
    url: "https://wa.link/35dp71",
    color: "hover:text-white hover:bg-green-500",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/ender_devlogs/",
    color:
      "hover:text-white hover:bg-gradient-to-tr from-purple-500 to-pink-500",
  },
  {
    name: "Tiktok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@enderhell24",
    color:
      "hover:text-white hover:bg-gradient-to-tr from-blue-400 to-red-500",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UCCAe4j8TyxrDxHolFnYaTtA",
    color: "hover:text-white hover:bg-red-600",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full h-24 sm:max-h-14 flex flex-col flex-nowrap items-center sm:flex-row sm:justify-between sm:px-4">
      <h1 className={`${myFont.className} text-xl text-center my-4`}>
        ©2023 Enzo Borrelli
      </h1>
      <nav>
        <ul className="flex flex-wrap flex-row gap-3 mb-4 sm:mt-4">
          {Socials.map((social, index) => (
            <li
              className={`text-2xl ${social.color} flex flex-wrap justify-center text-black items-center bg-slate-50 p-2 rounded-2xl hover:-translate-y-3 transition-all ease-in duration-200`}
              key={index}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
