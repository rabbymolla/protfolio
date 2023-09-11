import Logo from "@/SVG/Logo";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import services from "@/Data/Services";
import Link from "next/link";
import resources from "@/Data/Resources";
import { FaRocket } from "react-icons/fa";
import Facebook from "@/SVG/Facebook";
import Instagram from "@/SVG/Instagram";
import Twetter from "@/SVG/Tewtter";
import Pintarest from "@/SVG/Pintarest";
import { motion } from "framer-motion";
import CopyRight from "@/Componnent/CopyRight/CopyRight";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="footer_logo text-center text-md-start mb-5 mb-lg-0">
                <Logo />
                <p className={openSans.className + " " + "pt-3 pt-lg-5"}>
                  There are many variations of passages of available, but the
                  majority have suffered.
                </p>
              </div>
            </Col>
            <Col xs={6} lg={3}>
              <div className="footer_link text-center text-md-start ">
                <h1 className={DmSans.className + " " + "mb-1 mb-lg-5"}>
                  Services
                </h1>
                {services.map((data, i) => (
                  <Link className={DmSans.className} href={data.url} key={i}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </Col>
            <Col xs={6} lg={3}>
              <div className="footer_link text-center text-md-start">
                <h1 className={DmSans.className + " " + "mb-1 mb-lg-5"}>
                  Resources
                </h1>
                {resources.map((data, i) => (
                  <Link className={DmSans.className} href={data.url} key={i}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer_input text-center text-md-start mt-5 mt-lg-0">
                <h1 className={DmSans.className + " " + "mb-1 mb-lg-5"}>
                  Newsletter
                </h1>
                <p className={DmSans.className + " " + "mb-3"}>
                  Subscribe for our upcoming latest address and resources
                </p>
                <div className="input_footer">
                  <input placeholder="Email" type="text" />
                  <button>
                    <FaRocket />
                  </button>
                </div>
                <div className="footer_social d-flex align-items-center justify-content-center justify-content-lg-start mt-4 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="social"
                  >
                    <Facebook />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="social"
                  >
                    <Instagram />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="social"
                  >
                    <Twetter />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="social"
                  >
                    <Pintarest />
                  </motion.div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <CopyRight />
    </>
  );
};

export default Footer;
