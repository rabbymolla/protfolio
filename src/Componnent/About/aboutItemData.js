import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const AboutItemData = ({ hadding, pragrap, btn }) => {
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{
        x: 0,
      }}
      transition={{
        staggerChildren: 0.2,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="about_data"
    >
      <h1 className={DmSans.className}>{hadding}</h1>
      <p className={DmSans.className}>{pragrap}</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className={DmSans.className}
      >
        {btn}
      </motion.button>
    </motion.div>
  );
};

export default AboutItemData;
