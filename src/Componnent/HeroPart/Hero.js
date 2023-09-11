"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "./HeroLeft";
import Image from "next/image";
import HeroImg from "../../images/hero.webp";
import { motion } from "framer-motion";

const HeroPart = () => {
  return (
    <>
      <section id="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xs={12}>
              <HeroLeft />
            </Col>
            <Col lg={6} xs={12}>
              <motion.div
                animate={{ y: [0, 50, 0, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="hero_img"
              >
                <Image
                  src={HeroImg}
                  loading="lazy"
                  width={400}
                  height={400}
                  alt="hero_bannar"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroPart;
