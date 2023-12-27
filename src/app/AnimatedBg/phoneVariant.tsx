import { motion } from "framer-motion";
import {
  MdCamera,
  MdCameraRoll,
  MdVideoCameraBack,
  MdPhotoCamera,
} from "react-icons/md";
import { FaCode, FaCodeBranch, FaLaptopCode, FaFileCode } from "react-icons/fa";
import { symbolStyle } from "../page";
export const VideoPhoneVariant = () => {
  return  (
  <motion.div className="visible md:hidden">  
  <motion.div
    initial={{ x: -220, y: -220 }}
    animate={{ x: -80, y: -170 }}
    transition={{ duration: 1 }}
    className={`${symbolStyle}`}
  >
    <MdCamera />
  </motion.div>
  <motion.div
    initial={{ x: -220, y: -220 }}
    animate={{ x: 30, y: -100 }}
    transition={{ duration: 1 }}
    className={`${symbolStyle}`}
  >
    <MdCameraRoll />
  </motion.div>
  <motion.div
    initial={{ x: -220, y: 220 }}
    animate={{ x: -80, y: 130 }}
    transition={{ duration: 1 }}
    className={`${symbolStyle}`}
  >
    <MdVideoCameraBack />
  </motion.div>
  <motion.div
    initial={{ x: -220, y: 220 }}
    animate={{ x: 30, y: 60 }}
    transition={{ duration: 1 }}
    className={`${symbolStyle}`}
  >
    <MdPhotoCamera />
  </motion.div>
  </motion.div>);
};

export const FrontEndPhoneVariant =()=>{
    return(
        <motion.div className="visible md:hidden">
        <motion.div
          initial={{ x: 220, y: -220 }}
          animate={{ x: 30, y: -170 }}
          transition={{ duration: 1 }}
          className={`${symbolStyle}`}
        >
          <FaCode />
        </motion.div>
        <motion.div
          initial={{ x: 220, y: -220 }}
          animate={{ x: -70, y: -100 }}
          transition={{ duration: 1 }}
          className={`${symbolStyle}`}
        >
          <FaCodeBranch />
        </motion.div>
        <motion.div
          initial={{ x: 220, y: 220 }}
          animate={{ x: 30, y: 130 }}
          transition={{ duration: 1 }}
          className={`${symbolStyle}`}
        >
          <FaLaptopCode />
        </motion.div>
        <motion.div
          initial={{ x: 220, y: 220 }}
          animate={{ x: -70, y: 60 }}
          transition={{ duration: 1 }}
          className={`${symbolStyle}`}
        >
          <FaFileCode />
        </motion.div>
        </motion.div>
    );
}


