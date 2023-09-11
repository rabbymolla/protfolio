"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { DM_Sans, Open_Sans } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const Subscribe = () => {
  return (
    <section id="subscribe">
      <Container>
        <div className="sub_bg">
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="sub_left">
                <h1 className={DmSans.className}>
                  Subscribe to Our Newsletter
                </h1>
                <p className={openSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </Col>
            <Col lg={2}></Col>
            <Col lg={5}>
              <div className="sub_right">
                <input
                  className={DmSans.className}
                  type="text"
                  placeholder="Email"
                />
                <button type="submit">
                  <FaArrowRight />
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
