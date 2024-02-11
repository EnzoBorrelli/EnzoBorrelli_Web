"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import LanguageContext from "@/providers/LanguageContext";
import { RiMailAddFill } from "react-icons/ri";
import Form from "@/components/sendEmail/Form";
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "ender-font.ttf",
});

export default function Header() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    // El contexto es undefined, puedes manejar esto de alguna manera (lanzar una excepción, mostrar un mensaje de error, etc.)
    return <></>;
  }

  const { texts, handleLanguage } = languageContext;

  return (
    <header className=" bg-slate-900 p-2 py-4 flex flex-nowrap flex-col sm:flex-row gap-2 justify-between z-0">
      <motion.div
        className=" px-2 flex flex-wrap flex-row items-center justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/images/logo.webp" width={50} height={50} alt="logo" />
        <Link href="/">
          <h1
            className={`${myFont.className} text-2xl text-center mx-1 mt-2 hover:text-slate-400`}
          >
            Enzo Borrelli
          </h1>
        </Link>
      </motion.div>
      <div className="flex flex-nowrap items-center justify-between w-full sm:w-2/3">
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 sm:ml-16 md:ml-32 lg:ml-36 bg-gradient-to-r from-amber-500 to-cyan-500 text-4xl flex flex-wrap justify-center items-center rounded-lg"
        >
          <Link href="./contact">
            <RiMailAddFill />
          </Link>
        </motion.span>
        <select
          className="w-14 h-14 p-2 text-2xl flex cursor-pointer flex-wrap justify-center items-center rounded-lg bg-slate-700"
          name="language"
          onChange={handleLanguage}
        >
          <option value="en">🇬🇧</option>
          <option value="es">🇪🇦</option>
        </select>
      </div>
    </header>
  );
}
