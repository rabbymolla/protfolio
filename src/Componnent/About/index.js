"use client";
import about from "@/Data/About";
import { DM_Sans, Open_Sans } from "next/font/google";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import AboutItemData from "./aboutItemData";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const AboutItem = () => {
  const [acctive, setAcctive] = useState(0);
  const handelClick = (i) => {
    setAcctive(i);
  };

  return (
    <section id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Row className="row-gap-4">
              {about.map((data, i) => (
                <Col lg={6} key={i}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    onClick={() => handelClick(i)}
                    className="about_left "
                    style={{
                      backgroundColor: acctive == i && "#6344c6",
                    }}
                  >
                    <h1
                      style={{ color: acctive == i && "#fff" }}
                      className={DmSans.className}
                    >
                      {data.hadding}
                    </h1>
                    <p
                      style={{ color: acctive == i && "#fff" }}
                      className={DmSans.className}
                    >
                      {data.pragrap}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}>
            <div className="about_right">
              {acctive === 0 && (
                <AboutItemData
                  hadding=" Get So Many Awards In 1 years"
                  pragrap="There are many variations of passages of Lorem Ipsum available,
                          but the majority."
                  btn=" Visit Now"
                />
              )}
              {acctive === 1 && (
                <AboutItemData
                  hadding=" Get So Many Awards In 2 years"
                  pragrap="There are many variations of passages of Lorem Ipsum available,
                          but the majority."
                  btn=" Visit Now"
                />
              )}
              {acctive === 2 && (
                <AboutItemData
                  hadding=" Get So Many Awards In 3 years"
                  pragrap="There are many variations of passages of Lorem Ipsum available,
                          but the majority."
                  btn=" Visit Now"
                />
              )}
              {acctive === 3 && (
                <AboutItemData
                  hadding=" Get So Many Awards In 4 years"
                  pragrap="There are many variations of passages of Lorem Ipsum available,
                          but the majority."
                  btn=" Visit Now"
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutItem;
