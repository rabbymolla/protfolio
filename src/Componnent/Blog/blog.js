"use client";
import React, { lazy } from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Blog_one from "../../images/blog-1.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import Slider from "react-slick";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    Infinity: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <section id="blog">
      <Container>
        <Row>
          <Col lg={7} className="m-auto text-center">
            <div className="blog_hedding">
              <h1 className={DmSans.className}>Latest Blog</h1>
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Slider {...settings}>
            <Col lg={4}>
              <div className="blog_box">
                <Image src={Blog_one} loading="lazy" alt="blog-1" />
                <div className="blog_date">
                  <CiCalendarDate size={20} />
                  <span className={DmSans.className}>10 January 2023</span>
                </div>
                <h5 className={DmSans.className}>
                  Bitcoin and Economic Freedom
                </h5>
                <button className={DmSans.className}>Read More</button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog_box">
                <Image src={Blog_one} loading="lazy" alt="blog-1" />
                <div className="blog_date">
                  <CiCalendarDate size={20} />
                  <span className={DmSans.className}>10 January 2023</span>
                </div>
                <h5 className={DmSans.className}>
                  Bitcoin and Economic Freedom
                </h5>
                <button className={DmSans.className}>Read More</button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog_box">
                <Image src={Blog_one} loading="lazy" alt="blog-1" />
                <div className="blog_date">
                  <CiCalendarDate size={20} />
                  <span className={DmSans.className}>10 January 2023</span>
                </div>
                <h5 className={DmSans.className}>
                  Bitcoin and Economic Freedom
                </h5>
                <button className={DmSans.className}>Read More</button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog_box">
                <Image src={Blog_one} loading="lazy" alt="blog-1" />
                <div className="blog_date">
                  <CiCalendarDate size={20} />
                  <span className={DmSans.className}>10 January 2023</span>
                </div>
                <h5 className={DmSans.className}>
                  Bitcoin and Economic Freedom
                </h5>
                <button className={DmSans.className}>Read More</button>
              </div>
            </Col>
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
