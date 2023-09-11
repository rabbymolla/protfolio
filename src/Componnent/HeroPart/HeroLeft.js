import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import B from "@/SVG/B";
import Dribbble from "@/SVG/Dribbble";
import InstagramTwo from "@/SVG/InstagramTwo";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

const HeroLeft = () => {
  return (
    <>
      <div className="hero_left">
        <div className="hero_left_text">
          <h1 className={DmSans.className}>
            <span>Creative</span>
            <span>Design and Work</span>
            <span>Solution</span>
          </h1>
          <p className={DmSans.className + " " + "py-4"}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className={openSans.className}
          >
            Say Hello
          </motion.button>
          <Link className={DmSans.className} href="/">
            My Work
            <BsArrowUpRight />
          </Link>
        </div>
        <div className="hero_left_icon d-flex align-items-center mt-4">
          <h5 className={DmSans.className}>Follow me on</h5>

          <Link href="/">
            <B />
          </Link>

          <Link href="/">
            <Dribbble />
          </Link>
          <Link href="/">
            <InstagramTwo />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
