import ManuData from "@/Data/ManuData";
import Logo from "@/SVG/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

const Manubar = () => {
  const [navShow, setNavShow] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 50) {
        setNavShow(true);
      } else {
        setNavShow(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        className={
          navShow
            ? "nav stickyBar py-4 d-none d-lg-block"
            : "nav py-4 d-none d-lg-block"
        }
      >
        <Container>
          <Link href="#">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {ManuData.map((manu, i) => (
                <Link
                  className={DmSans.className + " " + "mx-3"}
                  key={i}
                  href={manu.url}
                >
                  {manu.title}
                </Link>
              ))}
            </Nav>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className={DmSans.className}
            >
              Contact Now
            </motion.button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-lg-none py-4">
        <Container>
          <div className="mobile_bar d-flex align-items-center justify-content-between">
            <Link href="#">
              <Logo />
            </Link>

            <HiOutlineBars3BottomRight
              size={30}
              color="#6344c6"
              cursor="pointer"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Manubar;
