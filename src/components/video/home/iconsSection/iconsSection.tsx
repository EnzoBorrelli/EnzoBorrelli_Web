"use client";

import { motion } from "framer-motion";
import {
  iconDivStyle,
  iconLinkStyle,
  sectionsStyles,
} from "../../../stylesConst";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiObsstudio,
  SiNextdotjs,
  SiAdobeillustrator,
  SiBlender,
} from "react-icons/si";
import useLang from "@/languages/useLang";

const toolsIcons = [
  {
    name: "premiere",
    href: "https://www.adobe.com/products/premiere.html",
    icon: <SiAdobepremierepro />,
    color: "text-blue-900",
  },
  {
    name: "Obs",
    href: "https://obsproject.com/",
    icon: <SiObsstudio />,
    color: "text-black",
  },
  {
    name: "afterEffects",
    href: "https://www.adobe.com/products/aftereffects.html",
    icon: <SiAdobeaftereffects />,
    color: "text-blue-900",
  },
];
const extraIcons = [
  {
    name: "photoShop",
    href: "https://www.adobe.com/products/photoshop.html",
    icon: <SiAdobephotoshop />,
    color: "text-sky-800",
  },
  {
    name: "blender",
    href: "https://www.blender.org/",
    icon: <SiBlender />,
    color: "text-orange-400",
  },
  {
    name: "illustrator",
    href: "https://www.adobe.com/products/illustrator.html",
    icon: <SiAdobeillustrator />,
    color: "text-amber-800",
  },
];

const iconVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
  hover: {
    y: -10,
  },
};

export default function IconSection() {
  const text = useLang();
  if (!text) {
    return <></>;
  }
  return (
    <section className={sectionsStyles}>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold my-1 md:mx-16"
        >
          {text.videoTools}
        </motion.h2>
        <div className={`flex-row ${iconDivStyle}`}>
          {toolsIcons.map((icon, index) => (
            <motion.a
              key={index}
              variants={iconVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${icon.color} ${iconLinkStyle}`}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold my-1 md:mx-16"
        >
          {text.videoExtra}
        </motion.h2>
        <div className={`flex-row-reverse ${iconDivStyle}`}>
          {extraIcons.map((icon, index) => (
            <motion.a
              key={index}
              variants={iconVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${icon.color} ${iconLinkStyle}`}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
