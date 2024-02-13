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

const enYTvideos = [
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
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

export default function EnglishYTchannel() {
  return (
    <section>
      <h2 className={`${H2Style} text-4xl text-red-600`}>
        <FaYoutube />{" "}
        <motion.a
        initial={{scaleX:1}}
        whileHover={{scaleX:0.9}}
          href='https://www.youtube.com/channel/UCCAe4j8TyxrDxHolFnYaTtA'
          target="_blank"
          rel="noopener noreferrer"
          className={LinkStyle}
        >
          Endy&apos;s Debug Diaries
        </motion.a>
      </h2>
      <div className={videoLandscapeDivStyle}>
        {enYTvideos.map((video) => (
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
