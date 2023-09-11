"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { DM_Sans, Open_Sans } from "next/font/google";
import ServiceOne from "@/SVG/ServiceOne";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const Service = () => {
  const [serviceClick, setServiceClick] = useState(1);
  const handleItems = (i) => {
    setServiceClick(i);
  };
  return (
    <section id="service">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            {serviceClick === 1 && (
              <motion.div
                initial={{ x: -200 }}
                animate={{
                  x: 0,
                }}
                transition={{
                  staggerChildren: 0.2,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="service_left"
              >
                <h1 className={DmSans.className}>
                  I <span>Run</span> Agency <span>Smartly</span> With My{" "}
                  <span>Team</span> Member.
                </h1>
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className={openSans.className}
                >
                  Say Hello
                </motion.button>
              </motion.div>
            )}
            {serviceClick === 2 && (
              <motion.div
                initial={{ x: -200 }}
                animate={{
                  x: 0,
                }}
                transition={{
                  staggerChildren: 0.2,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="service_left"
              >
                <h1 className={DmSans.className}>
                  I <span>Run</span> Agency <span>Funly</span> With My{" "}
                  <span>Team</span> Member.
                </h1>
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className={openSans.className}
                >
                  Say Hello
                </motion.button>
              </motion.div>
            )}
            {serviceClick === 3 && (
              <motion.div
                initial={{ x: -200 }}
                animate={{
                  x: 0,
                }}
                transition={{
                  staggerChildren: 0.2,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="service_left"
              >
                <h1 className={DmSans.className}>
                  I <span>Run</span> Agency <span>Herdly</span> With My{" "}
                  <span>Team</span> Member.
                </h1>
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className={openSans.className}
                >
                  Say Hello
                </motion.button>
              </motion.div>
            )}
          </Col>
          <Col lg={6} className="mt-5 mt-sm-0">
            <Row>
              <Col lg={12}>
                <div
                  className="service_right"
                  onClick={() => handleItems(1)}
                  style={{ marginLeft: serviceClick == 1 && "40px" }}
                >
                  <Row className="align-items-center">
                    <Col lg={2}>
                      <div className="service_svg">
                        <ServiceOne />
                      </div>
                    </Col>
                    <Col lg={10}>
                      <div className="service_text">
                        <h1 className={DmSans.className}>Web Development</h1>
                        <p className={DmSans.className}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div
                  className="service_right my-4"
                  onClick={() => handleItems(2)}
                  style={{ marginLeft: serviceClick == 2 && "40px" }}
                >
                  <Row className="align-items-center">
                    <Col lg={2}>
                      <div className="service_svg">
                        <ServiceOne />
                      </div>
                    </Col>
                    <Col lg={10}>
                      <div className="service_text">
                        <h1 className={DmSans.className}>
                          Product Design & Development
                        </h1>
                        <p className={DmSans.className}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div
                  className="service_right"
                  onClick={() => handleItems(3)}
                  style={{ marginLeft: serviceClick == 3 && "40px" }}
                >
                  <Row className="align-items-center">
                    <Col lg={2}>
                      <div className="service_svg">
                        <ServiceOne />
                      </div>
                    </Col>
                    <Col lg={10}>
                      <div className="service_text">
                        <h1 className={DmSans.className}>Graphic Design</h1>
                        <p className={DmSans.className}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
