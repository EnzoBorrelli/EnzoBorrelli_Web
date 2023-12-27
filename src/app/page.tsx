"use client";
import { motion } from "framer-motion";
import {
  MdCamera,
  MdCameraRoll,
  MdVideoCameraBack,
  MdPhotoCamera,
} from "react-icons/md";
import { FaCode,FaCodeBranch,FaLaptopCode,FaFileCode } from "react-icons/fa";

const secStyle =
  "w-1/2 h-full relative shadow-inner text-black shadow-black flex flex-wrap text-center items-center justify-center";
const h1Style = "text-2xl font-bold absolute z-10";
const symbolStyle = "text-5xl absolute z-0 opacity-30";
export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="bg-white  flex flex-row flex-wrap w-full h-96">
        {/* seccion sobre edicion */}
        <section className={`bg-orange-200 ${secStyle}`}>
          <motion.h1
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className={`${h1Style}`}
          >
            Edicion de video
          </motion.h1>
          <motion.div
            initial={{ x: -200, y: -200 }}
            animate={{ x: -50, y: -150 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <MdCamera />
          </motion.div>
          <motion.div
            initial={{ x: -200, y: -200 }}
            animate={{ x: 50, y: -80 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <MdCameraRoll />
          </motion.div>
          <motion.div
            initial={{ x: -200, y: 200 }}
            animate={{ x: -50, y: 150 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <MdVideoCameraBack />
          </motion.div>
          <motion.div
            initial={{ x: -200, y: 200 }}
            animate={{ x: 50, y: 80 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <MdPhotoCamera />
          </motion.div>
        </section>
{/* seccion sobre frontend */}
        <section className={`bg-emerald-200 ${secStyle}`}>
          <motion.h1
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className={`${h1Style}`}
          >
            Desarrollo FrontEnd
          </motion.h1>
          <motion.div
            initial={{ x: 200, y: -200 }}
            animate={{ x: 50, y: -150 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <FaCode />
          </motion.div>
          <motion.div
            initial={{ x: 200, y: -200 }}
            animate={{ x: -50, y: -80 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <FaCodeBranch />
          </motion.div>
          <motion.div
            initial={{ x: 200, y: 200 }}
            animate={{ x: 50, y: 150 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <FaLaptopCode />
          </motion.div>
          <motion.div
            initial={{ x: 200, y: 200 }}
            animate={{ x: -50, y: 80 }}
            transition={{ duration: 1 }}
            className={`${symbolStyle}`}
          >
            <FaFileCode />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
