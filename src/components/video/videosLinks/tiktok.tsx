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
import { FaTiktok } from "react-icons/fa";

const tiktokVideos = [
  {
    key: "BBTiktok",
    image: "/images/video-thumbnails/tiktok/black_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7325561196994628869",
  },
  {
    key: "gojotiktok",
    image: "/images/video-thumbnails/tiktok/gojo_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7325913885863578886",
  },
  {
    key: "sukunaTiktok",
    image: "/images/video-thumbnails/tiktok/sukuna_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7329238339779906822",
  },
  {
    key: "gjinxTiktok",
    image: "/images/video-thumbnails/tiktok/jinx_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7330316626732076293",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.tiktok.com/@enderhell24",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.tiktok.com/@enderhell24",
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
      delay: 0.5,
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

export default function Tiktok() {
  return (
    <section>
      <h2 className={`${H2Style} text-3xl text-black`}>
        <FaTiktok />{" "}
        <motion.a
          initial={{ scaleX: 1 }}
          whileHover={{ scaleX: 0.9 }}
          href="https://www.tiktok.com/@enderhell24"
          target="_blank"
          rel="noopener noreferrer"
          className={LinkStyle}
        >
          @EnderHell24
        </motion.a>
      </h2>
      <div className={videoPortraitDivStyle}>
        {tiktokVideos.map((video) => (
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
