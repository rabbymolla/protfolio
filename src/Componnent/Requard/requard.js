"use client";
import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import RequardOne from "@/SVG/requardOne";
import RequardTwo from "@/SVG/requardTwo";
import RequardThree from "@/SVG/RequardThree";
import RequardFour from "@/SVG/RequardFour";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});
const Requard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          cssEase: "linear",
          arrows: null,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          cssEase: "linear",
          arrows: null,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="requard">
      <Container>
        <h1 className={DmSans.className}>Reputed Partners</h1>
        <Row>
          <Slider {...settings}>
            <Col lg={3}>
              <div className="requard_box">
                <div className="requard_text">
                  <RequardOne />
                  <h2>Happy Mart</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="requard_box">
                <div className="requard_text">
                  <RequardThree />
                  <h2>Lori Cracker</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="requard_box">
                <div className="requard_text">
                  <RequardTwo />
                  <h2>Emad Fashion</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="requard_box">
                <div className="requard_text">
                  <RequardFour />
                  <h2>Docco Semims</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="requard_box">
                <div className="requard_text">
                  <RequardThree />
                  <h2>Lori Cracker</h2>
                </div>
              </div>
            </Col>
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default Requard;
