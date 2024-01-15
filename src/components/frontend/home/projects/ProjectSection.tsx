"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import useLang from "@/languages/useLang";

const projects = [
  {
    title: "emrobots",
    image: "/images/projects-images/emrobots.webp",
    h3: "E-commerce for EM-Robots®, a Competitive sumo kit shop from Argentina",
    web: "https://emrobots.com.ar",
    github: "https://github.com/EnzoBorrelli/EMR-WebAPP",
  },
  {
    title: "francisDesign",
    image: "/images/projects-images/francisDesign.webp",
    h3: "E-commerce & blog web app for Francis Design®",
    web: "https://github.com/EnzoBorrelli/Francis-Design",
    github: "https://github.com/EnzoBorrelli/Francis-Design",
  },
  {
    title: "placeholder",
    image: "/images/projects-images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
  },
  {
    title: "placeholder",
    image: "/images/projects-images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
  },
  {
    title: "placeholder",
    image: "/images/projects-images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
  },
  {
    title: "placeholder",
    image: "/images/projects-images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
  },
  {
    title: "placeholder",
    image: "/images/projects-images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
  },
  {
    title: "placeholder",
    image: "/images/projects-images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
  },
  {
    title: "placeholder",
    image: "/images/projects-images/placeholder.webp",
    h3: "this is a placeholder to hold the place",
    web: "https://tailwindcss.com/docs/border-color",
    github: "https://tailwindcss.com/docs/border-color",
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
      delay: 0.15 * index,
    },
  }),
};

export default function ProjectSection({
  ProjectsMax,
}: {
  ProjectsMax : number;
}) {
  const text = useLang();
  if (!text) return <></>;

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
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold mt-8 sm:mx-16"
      >
        {text.recentProjects}
      </motion.h2>
      <motion.section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-3 md:-ml-1 mb-3">
        {projects.slice(0, ProjectsMax).map((project, index) => (
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
              className={`absolute top-0 left-50 w-[350px] md:w-fit h-full backdrop-blur-sm backdrop-brightness-50 ${
                hoverStates[index]
                  ? ""
                  : "md:backdrop-blur-0 md:backdrop-brightness-0 md:hidden"
              } flex flex-col justify-center items-center gap-2 px-2`}
            >
              <h3 className="text-center font-bold text-lg text-white">
                {project.h3}
              </h3>
              <motion.a
                whileHover={{ x: [0, 10, -10, 10 - 10] }}
                className="text-center font-bold text-md bg-slate-500 text-white px-4 rounded-2xl border-2 border-slate-900"
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
              >
                To the WebPage
              </motion.a>
              <motion.a
                whileHover={{ x: [0, 10, -10, 10 - 10] }}
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
    </>
  );
}
