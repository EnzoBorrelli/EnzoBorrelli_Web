"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FrontEndPhoneVariant,
  VideoPhoneVariant,
} from "./AnimatedBg/phoneVariant";
import { FrontEndMDVariant, VideoMDVariant } from "./AnimatedBg/mediumVariant";
import { FrontEndLgVariant, VideoLgVariant } from "./AnimatedBg/largeVariant";
import { useState } from "react";

const secStyle =
  "w-1/2 h-full relative shadow-inner text-black shadow-black flex flex-wrap text-center items-center justify-center";
const h1Style = "text-2xl font-bold absolute z-10";
export const symbolStyle = "text-5xl absolute z-0 opacity-30";
export default function Home() {
  const [isLeftHover, setLeftIsHover] = useState(false);
  const [isRightHover, setIsRightHover] = useState(false);
  return (
    <main className="w-full h-full">
      <div className="bg-white  flex flex-row flex-wrap w-full h-96">
        {/* seccion sobre edicion */}
        <section className={`bg-orange-200 ${secStyle}`}>
          <motion.h1
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className={`md:text-3xl lg:text-4xl ${h1Style}`}
          >
            <Link
              onMouseEnter={() => setLeftIsHover(true)}
              onMouseLeave={() => setLeftIsHover(false)}
              href="video"
            >
              Video Editor
            </Link>
          </motion.h1>
          <VideoPhoneVariant />
          <VideoMDVariant />
          <VideoLgVariant isHover={isLeftHover} />
        </section>
        {/* seccion sobre frontend */}
        <section className={`bg-emerald-200 ${secStyle}`}>
          <motion.h1
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className={`md:text-3xl lg:text-4xl ${h1Style}`}
          >
            <Link
              onMouseEnter={() => setIsRightHover(true)}
              onMouseLeave={() => setIsRightHover(false)}
              href="frontend"
            >
              FrontEnd Developer
            </Link>
          </motion.h1>
          <FrontEndPhoneVariant />
          <FrontEndMDVariant />
          <FrontEndLgVariant isHover={isRightHover} />
        </section>
      </div>
    </main>
  );
}
