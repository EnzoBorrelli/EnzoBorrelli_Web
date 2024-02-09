"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { VideoPhoneVariant } from "../AnimatedBg/phoneVariant";
import { VideoMDVariant } from "../AnimatedBg/mediumVariant";
import { VideoLgVariant } from "../AnimatedBg/largeVariant";
import useLang from "@/languages/useLang";

export default function VideoSelector() {
  const text = useLang();
  const [isHover, setHover] = useState(false);
  if (!text) {
    return <></>;
  }

  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-gradient-to-tr from-rose-400 to-amber-300 overflow-hidden w-1/2 h-full relative shadow-inner text-black shadow-black flex flex-wrap text-center items-center justify-center"
    >
      <motion.h1
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        whileHover={{ rotateZ:-15}}
        transition={{ duration: 1 }}
        className="md:text-3xl lg:text-4xl text-2xl font-bold absolute z-10"
      >
        <Link href="video">{text.videoSelector}</Link>
      </motion.h1>
      <VideoPhoneVariant />
      <VideoMDVariant />
      <VideoLgVariant isHover={isHover} />
    </section>
  );
}
