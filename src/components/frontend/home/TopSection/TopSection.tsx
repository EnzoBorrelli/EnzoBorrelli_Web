"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { sectionsStyles } from "../../../stylesConst";
import useLang from "@/languages/useLang";

export default function TopSection() {
  const text = useLang();
  if (!text) return <></>;

  return (
    <>
      <motion.h1
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold py-2 md:mt-3"
      >
        {text.frontEndSelector}
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
          {text.frontPresentation}
        </motion.h2>
      </section>
    </>
  );
}
