import FooterManu from "@/Data/footerManu";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});
const CopyRight = () => {
  return (
    <>
      <section id="copy_right">
        <Container>
          <Row>
            <Col lg={6} className="mx-auto text-center">
              <div className="copy_right_link">
                {FooterManu.map((data, i) => (
                  <Link key={i} href={data.url} className={openSans.className}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CopyRight;
