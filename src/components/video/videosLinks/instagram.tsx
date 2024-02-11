"use client";
import {
  H2Style,
  ImageStyle,
  LinkStyle,
  videoPortraitDivStyle,
} from "@/components/stylesConst";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const igVideos = [
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
];

const variants = {
  initial: {
    x: -1100,
    scale: 1,
  },
  animate: {
    x: 0,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  hover: {
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Instagram() {
  return (
    <section>
      <h2 className={`${H2Style} text-3xl text-pink-500`}>
        <FaInstagram />
        <motion.a
          initial={{ scaleX: 1 }}
          whileHover={{ scaleX: 0.9 }}
          href="https://www.instagram.com/ender_devlogs/"
          target="_blank"
          rel="noopener noreferrer"
          className={LinkStyle}
        >
          Ender_Devlogs
        </motion.a>
      </h2>
      <div className={videoPortraitDivStyle}>
        {igVideos.map((video) => (
          <motion.a
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            key={video.key}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={ImageStyle}
              src={video.image}
              width={180}
              height={320}
              alt={video.key}
              loading="lazy"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
