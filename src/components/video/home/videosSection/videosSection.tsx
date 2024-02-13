"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useLang from "@/languages/useLang";
import { ImageStyle } from "@/components/stylesConst";

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

const videos = {
  tiktok:{
    img:"/images/video-thumbnails/tiktok/sukuna_tiktok.webp",
    url:"https://www.tiktok.com/@enderhell24/video/7329238339779906822",
  },
  youtube:{
    img:"/images/video-thumbnails/youtube/ctr_video.webp",
    url:"https://www.youtube.com/watch?v=rbpxX9wkHCo",
  },
  ig:{
    img:"/images/video-thumbnails/tiktok/jinx_tiktok.webp",
    url:"https://www.tiktok.com/@enderhell24/video/7330316626732076293",
  }
}

export default function VideosSection() {
  const text = useLang();
  if (!text) {
    return <></>;
  }
  return (
    <>
      <h2 className="text-2xl font-bold my-3 md:mx-16">Recent videos</h2>
      <section className="flex flex-col mt-2 sm:flex-row items-center gap-2 sm:items-end">
          <motion.a
          className="hidden sm:flex"
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            href={videos.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={ImageStyle}
              src={videos.tiktok.img}
              width={180}
              height={320}
              alt=""
              loading="lazy"
            />
          </motion.a>
          <motion.a
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            href={videos.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={ImageStyle}
              src={videos.youtube.img}
              width={320}
              height={180}
              alt=""
              loading="lazy"
            />
          </motion.a>
          <motion.a
          className="hidden sm:flex"
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            href={videos.ig.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={ImageStyle}
              src={videos.ig.img}
              width={180}
              height={320}
              alt=""
              loading="lazy"
            />
          </motion.a>
          <div className="grid grid-rows-1 grid-cols-2 sm:hidden">
          <motion.a
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            href={videos.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={ImageStyle}
              src={videos.tiktok.img}
              width={180}
              height={320}
              alt=""
              loading="lazy"
            />
          </motion.a>
          <motion.a
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            href={videos.ig.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={ImageStyle}
              src={videos.ig.img}
              width={180}
              height={320}
              alt=""
              loading="lazy"
            />
          </motion.a>
          </div>
      </section>
    </>
  );
}
