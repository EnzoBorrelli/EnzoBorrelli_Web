'use client'

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from "react";
import { FrontEndPhoneVariant } from "../AnimatedBg/phoneVariant";
import { FrontEndMDVariant } from "../AnimatedBg/mediumVariant";
import { FrontEndLgVariant } from "../AnimatedBg/largeVariant";

export default function FrontEndSelector() {
    const [isHover, setHover] = useState(false);
  return (
    <section className="bg-emerald-200 w-1/2 h-full relative shadow-inner text-black shadow-black flex flex-wrap text-center items-center justify-center">
          <motion.h1
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className= "md:text-3xl lg:text-4xl text-2xl font-bold absolute z-10"
          >
            <Link
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              href="frontend"
            >
              FrontEnd Developer
            </Link>
          </motion.h1>
          <FrontEndPhoneVariant />
          <FrontEndMDVariant />
          <FrontEndLgVariant isHover={isHover} />
        </section>
  )
}
