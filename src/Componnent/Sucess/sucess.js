"use client";
import { DM_Sans, Open_Sans } from "next/font/google";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const Success = () => {
  return (
    <>
      <section id="success">
        <Container>
          <Row>
            <Col lg={7} xs={12}>
              <div className="success_left">
                <h1 className={DmSans.className}>
                  Failure is The Power that Gives <span>Success</span>
                </h1>
              </div>
            </Col>
            <Col lg={5} xs={12}>
              <div className="success_right">
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={DmSans.className + " " + "mt-4"}
                >
                  Download Now
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Success;
