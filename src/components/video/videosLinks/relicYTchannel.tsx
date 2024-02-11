"use client";
import {
  H2Style,
  ImageStyle,
  LinkStyle,
  videoLandscapeDivStyle,
} from "@/components/stylesConst";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const YTvideos = [
  {
    key: "ctrVideo",
    image: "/images/video-thumbnails/youtube/ctr_video.webp",
    url: "https://www.youtube.com/watch?v=rbpxX9wkHCo",
  },
  {
    key: "f9Video",
    image: "/images/video-thumbnails/youtube/f9_video.webp",
    url: "https://www.youtube.com/watch?v=Fj0kxx2d41U",
  },
  {
    key: "fortniteVideo",
    image: "/images/video-thumbnails/youtube/fortnite_video.webp",
    url: "https://www.youtube.com/watch?v=ZCKvthIhF5w",
  },
  {
    key: "genshinVideo",
    image: "/images/video-thumbnails/youtube/genshin_video.webp",
    url: "https://www.youtube.com/watch?v=6rOPkIlBtZM",
  },
];

const variants = {
  initial: {
    x: 1100,
    scale: 1,
  },
  animate: {
    x: 0,
    transition: {
      delay: 1.5,
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

export default function RelicYTchannel() {
  return (
    <section>
      <h2 className={`${H2Style} text-4xl text-red-600`}>
        <FaYoutube />{" "}
        <motion.a
          initial={{ scaleX: 1 }}
          whileHover={{ scaleX: 0.9 }}
          href="https://www.youtube.com/channel/UCAzNjbtcFgfFikHx8R3l84w"
          target="_blank"
          rel="noopener noreferrer"
          className={LinkStyle}
        >
          Relics of Ender
        </motion.a>
      </h2>
      <div className={videoLandscapeDivStyle}>
        {YTvideos.map((video) => (
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
              width={320}
              height={180}
              alt={video.key}
              loading="lazy"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
