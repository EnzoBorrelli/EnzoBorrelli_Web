import { motion } from "framer-motion";
import {
  MdCamera,
  MdCameraRoll,
  MdVideoCameraBack,
  MdPhotoCamera,
} from "react-icons/md";
import { FaCode, FaCodeBranch, FaLaptopCode, FaFileCode } from "react-icons/fa";
const symbolStyle = "text-5xl absolute z-0 opacity-30";
export const VideoLgVariant = ({isHover}:any) => {
  return (
    <motion.div className="hidden lg:flex">
      <motion.div
        initial={{ x: -300, y: -300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: -240, y: -170, opacity: 0.3 }
            : { x: -300, y: -300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <MdCamera />
      </motion.div>
      <motion.div
        initial={{ x: -300, y: -300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: 140, y: -100, opacity: 0.3 }
            : { x: -300, y: -300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <MdCameraRoll />
      </motion.div>
      <motion.div
        initial={{ x: -300, y: 300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: -240, y: 110, opacity: 0.3 }
            : { x: -300, y: 300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <MdVideoCameraBack />
      </motion.div>
      <motion.div
        initial={{ x: -300, y: 300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: 140, y: 60, opacity: 0.3 }
            : { x: -300, y: 300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <MdPhotoCamera />
      </motion.div>
    </motion.div>
  );
};

export const FrontEndLgVariant = ({isHover}: any) => {
  return (
    <motion.div className="hidden lg:flex">
      <motion.div
        initial={{ x: 300, y: -300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: 150, y: -170, opacity: 0.3 }
            : { x: 300, y: -300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <FaCode />
      </motion.div>
      <motion.div
        initial={{ x: 300, y: -300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: -220, y: -100, opacity: 0.3 }
            : { x: 300, y: -300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <FaCodeBranch />
      </motion.div>
      <motion.div
        initial={{ x: 300, y: 300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: 150, y: 100, opacity: 0.3 }
            : { x: 300, y: 300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <FaLaptopCode />
      </motion.div>
      <motion.div
        initial={{ x: 300, y: 300, opacity: 0 }}
        animate={
          isHover==true
            ? { x: -220, y: 60, opacity: 0.3 }
            : { x: 300, y: 300, opacity: 0 }
        }
        transition={{ duration: 1 }}
        className={`text-7xl ${symbolStyle}`}
      >
        <FaFileCode />
      </motion.div>
    </motion.div>
  );
};
