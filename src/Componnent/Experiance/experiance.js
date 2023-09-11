"use client";
import React from "react";
import { DM_Sans, Open_Sans, Grechen_Fuemen } from "next/font/google";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useScroll } from "framer-motion";
import ExperienceImg from "../../images/experience.jpg";
import Image from "next/image";
import exparienceData from "@/Data/ExparienceData";
import { BiCheck } from "react-icons/bi";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});
const grechenFuemen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

const Experiance = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section id="experiance">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="expariance_left">
              <Image
                src={ExperienceImg}
                loading="lazy"
                width={496}
                height={569}
                alt="ExperienceImg"
              />
              <motion.div
                animate={{ y: [0, 0, -106, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="exper_box"
              >
                <div className="experience">
                  <h5 className={DmSans.className}>5+ Year</h5>
                  <p className={DmSans.className}>Experience</p>
                </div>
              </motion.div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-sm-0">
            <div className="experiance_right">
              <h1 className={DmSans.className}>
                We <span>Run</span> Agency <span>Smartly</span> With Our{" "}
                <span>Team</span> Member.
              </h1>
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
              <ul>
                {exparienceData.map((data, i) => (
                  <li key={i}>
                    <BiCheck size={30} />{" "}
                    <span className={DmSans.className}>{data.tittle}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className={openSans.className}
              >
                Explore More
              </motion.button>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <Row className="align-items-center mt-5">
                  <Col lg={3}>
                    <div className="couter_up">
                      <h2 className={grechenFuemen.className}>
                        {counterOn && (
                          <CountUp start={0} end={30} delay={0} duration={2} />
                        )}
                        +
                      </h2>
                      <p className={DmSans.className}>Team Members</p>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="couter_up">
                      <h2 className={grechenFuemen.className}>
                        {counterOn && (
                          <CountUp start={0} end={150} delay={0} duration={2} />
                        )}
                      </h2>
                      <p className={DmSans.className}>Completed Projects</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="couter_up">
                      <h2 className={grechenFuemen.className}>
                        {counterOn && (
                          <CountUp start={0} end={50} delay={0} duration={2} />
                        )}
                        +
                      </h2>
                      <p className={DmSans.className}>Satisfied Clients</p>
                    </div>
                  </Col>
                </Row>
              </ScrollTrigger>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experiance;
