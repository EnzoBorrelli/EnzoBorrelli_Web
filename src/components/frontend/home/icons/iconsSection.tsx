"use client";

import { motion } from "framer-motion";
import { iconDivStyle, iconLinkStyle, sectionsStyles } from "../../../stylesConst";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNetlify,
  SiTailwindcss,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import useLang from "@/languages/useLang";

const langIcons = [
  {
    name: "html",
    href: "https://www.w3schools.com/html/default.asp",
    icon: <SiHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "css",
    href: "https://www.w3schools.com/css/",
    icon: <SiCss3 />,
    color: "text-blue-500",
  },
  {
    name: "js",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-500",
  },
  {
    name: "ts",
    href: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
    color: "text-blue-600",
  },
];
const toolsIcons = [
  {
    name: "git",
    href: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "text-orange-600",
  },
  {
    name: "vscode",
    href: "https://code.visualstudio.com/",
    icon: <TbBrandVscode />,
    color: "text-blue-500",
  },
  {
    name: "netlify",
    href: "https://www.netlify.com/",
    icon: <SiNetlify />,
    color: "text-teal-600",
  },
  {
    name: "taailwind",
    href: "https://tailwindcss.com/",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
  },
];

const iconVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
  hover: {
    y: -10,
  },
};

export default function IconSection() {
  const text = useLang();
  if (!text) {
    return <></>;
  }
  return (
    <section className={sectionsStyles}>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold my-1 md:mx-16"
        >
          {text.frontLang}
        </motion.h2>
        <div className={`flex-row ${iconDivStyle}`}>
          {langIcons.map((icon, index) => (
            <motion.a
              key={index}
              variants={iconVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${icon.color} ${iconLinkStyle}`}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold my-1 md:mx-16"
        >
          {text.frontTools}
        </motion.h2>
        <div className={`flex-row-reverse ${iconDivStyle}`}>
          {toolsIcons.map((icon, index) => (
            <motion.a
              key={index}
              variants={iconVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${icon.color} ${iconLinkStyle}`}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
