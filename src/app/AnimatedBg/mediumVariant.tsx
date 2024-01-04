import { motion } from "framer-motion";
import {
  MdCamera,
  MdCameraRoll,
  MdVideoCameraBack,
  MdPhotoCamera,
} from "react-icons/md";
import { FaCode, FaCodeBranch, FaLaptopCode, FaFileCode } from "react-icons/fa";
const symbolStyle = "text-5xl absolute z-0 opacity-30";
export const VideoMDVariant = () => {
  return  (
  <motion.div className="hidden md:flex lg:hidden">  
  <motion.div
    initial={{ x: -220, y: -220 }}
    animate={{ x: -180, y: -170 }}
    transition={{ duration: 1 }}
    className={`text-6xl ${symbolStyle}`}
  >
    <MdCamera />
  </motion.div>
  <motion.div
    initial={{ x: -220, y: -220 }}
    animate={{ x: 100, y: -100 }}
    transition={{ duration: 1 }}
    className={`text-6xl ${symbolStyle}`}
  >
    <MdCameraRoll />
  </motion.div>
  <motion.div
    initial={{ x: -220, y: 220 }}
    animate={{ x: -180, y: 120 }}
    transition={{ duration: 1 }}
    className={`text-6xl ${symbolStyle}`}
  >
    <MdVideoCameraBack />
  </motion.div>
  <motion.div
    initial={{ x: -220, y: 220 }}
    animate={{ x: 100, y: 60 }}
    transition={{ duration: 1 }}
    className={`text-6xl ${symbolStyle}`}
  >
    <MdPhotoCamera />
  </motion.div>
  </motion.div>);
};

export const FrontEndMDVariant =()=>{
    return(
        <motion.div className="hidden md:flex lg:hidden">
        <motion.div
          initial={{ x: 220, y: -220 }}
          animate={{ x: 100, y: -170 }}
          transition={{ duration: 1 }}
          className={`text-6xl ${symbolStyle}`}
        >
          <FaCode />
        </motion.div>
        <motion.div
          initial={{ x: 220, y: -220 }}
          animate={{ x: -150, y: -100 }}
          transition={{ duration: 1 }}
          className={`text-6xl ${symbolStyle}`}
        >
          <FaCodeBranch />
        </motion.div>
        <motion.div
          initial={{ x: 220, y: 220 }}
          animate={{ x: 100, y: 120 }}
          transition={{ duration: 1 }}
          className={`text-6xl ${symbolStyle}`}
        >
          <FaLaptopCode />
        </motion.div>
        <motion.div
          initial={{ x: 220, y: 220 }}
          animate={{ x: -150, y: 60 }}
          transition={{ duration: 1 }}
          className={`text-6xl ${symbolStyle}`}
        >
          <FaFileCode />
        </motion.div>
        </motion.div>
    );
}


