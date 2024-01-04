"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const sectionsStyles =
  "w-full flex flex-col items-center justify-center md:flex-row my-3";

const iconDivStyle = "flex flex-wrap justify-center text-3xl gap-3";
const iconLinkStyle = "shadow-md p-1";

const projects = [
  {
    title: "emrobots",
    image: "/images/emrobots.webp",
    h3: "E-commerce for EM-Robots®, a Competitive sumo kit shop from Argentina",
    web: "https://emrobots.com.ar",
    github: "https://github.com/EnzoBorrelli/EMR-WebAPP",
  },
  {
    title: "francisDesign",
    image: "/images/francisDesign.webp",
    h3: "E-commerce & blog web app for Francis Design®",
    web: "https://github.com/EnzoBorrelli/Francis-Design",
    github: "https://github.com/EnzoBorrelli/Francis-Design",
  },
  {
    title: "placeholder",
    image: "/images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
  },
];

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

const projectVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};
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

export default function FrontEndHome() {
  useEffect(() => {
    document.title = "Enzo Borrelli Web | FrontEnd Developer";
  }, []);

  const [hoverStates, setHoverStates] = useState(
    Array(projects.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    // Actualizar solo el estado correspondiente al índice del proyecto
    setHoverStates((prev) =>
      prev.map((state, i) => (i === index ? true : state))
    );
  };

  const handleMouseLeave = (index: number) => {
    // Actualizar solo el estado correspondiente al índice del proyecto
    setHoverStates((prev) =>
      prev.map((state, i) => (i === index ? false : state))
    );
  };

  return (
    <main className="bg-gray-200 w-full h-full flex flex-col p-2 fex-nowrap items-center justify-center text-slate-600">
      <motion.h1
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold py-2 md:mt-3"
      >
        FrontEnd Developer
      </motion.h1>
      <section className={sectionsStyles}>
        <motion.div
          initial={{ rotateX: 180, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 -mb-5 md:hidden"
        >
          <Image
            src="/images/yoMismo.webp"
            width={250}
            height={250}
            alt="logo"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ rotateX: 180, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 -mb-5 hidden md:flex sm:ml-10"
        >
          <Image
            src="/images/yoMismo.webp"
            width={400}
            height={400}
            alt="logo"
            loading="lazy"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-slate-500 md:text-lg md:mr-10 md:ml-4"
        >
          Hello! I am Enzo Borrelli, a frontend developer specialized in
          Next.js. My focus revolves around crafting unique and efficient web
          experiences for users.
        </motion.h2>
      </section>
      <section className={sectionsStyles}>
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold my-1 md:mx-16"
          >
            Languages i work with
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
            dev tools i use
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
      <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold mt-8 sm:mx-16"
          >
            Recent projects
          </motion.h2>
      <motion.section className={sectionsStyles}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="initial"
            animate="animate"
            custom={index}
            className="relative w-full h-full my-4 md:m-2 flex justify-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Image
              src={project.image}
              width={350}
              height={250}
              alt={project.title}
              loading="lazy"
            />
            <div
              className={`absolute top-0 left-50 w-[350px] md:w-fit h-full backdrop-blur-sm ${
                hoverStates[index] ? "" : "md:backdrop-blur-0 md:hidden"
              } flex flex-col justify-center items-center gap-2 px-2`}
            >
              <h3 className="text-center font-bold text-lg text-black">
                {project.h3}
              </h3>
              <motion.a
              whileHover={{x:[0,10,-10,10-10]}}
                className="text-center font-bold text-md bg-slate-500 text-white px-4 rounded-2xl border-2 border-slate-900"
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
              >
                To the WebPage
              </motion.a>
              <motion.a
              whileHover={{x:[0,10,-10,10-10]}}
                className="text-center font-bold text-md bg-slate-500 text-white px-4 rounded-2xl border-2 border-slate-900"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                To github repo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
