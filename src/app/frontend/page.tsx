"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const sectionsStyles = "w-full flex flex-col items-center justify-center sm:flex-row"

export default function FrontEndHome() {
  useEffect(() => {
    document.title = "Enzo Borrelli Web | FrontEnd Developer";
  }, []);

  return (
    <main className="bg-gray-200 w-full h-full flex flex-col p-2 fex-nowrap items-center justify-center text-slate-600">
      <motion.h1
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold py-2"
      >
        FrontEnd Developer
      </motion.h1>
      <section className={sectionsStyles}>
        <motion.div
          initial={{ rotateX: 180, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 -mb-5"
        >
          <Image
            src="/images/yoMismo.webp"
            width={250}
            height={250}
            alt="logo"
            loading="lazy"
          />
        </motion.div>
        <motion.h2 initial={{opacity:0}} animate={{opacity:1}} className="mt-4 text-center text-slate-500">
          Hello! I'm Enzo Borreli, a frontend developer specialized in Next.js.
          My focus revolves around crafting unique and efficient web experiences
          for users.
        </motion.h2>
      </section>
      <section className={sectionsStyles}>
        <div>
          <h2>Languages i work with</h2>
        </div>
        <div>
          <h2>dev tools i use</h2>
        </div>
      </section>
    </main>
  );
}
