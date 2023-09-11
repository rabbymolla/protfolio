import AboutItem from "@/Componnent/About";
import Blog from "@/Componnent/Blog/blog";
import Experiance from "@/Componnent/Experiance/experiance";
import HeroPart from "@/Componnent/HeroPart/Hero";
import Layout from "@/Componnent/Layout/Layout";
import Requard from "@/Componnent/Requard/requard";
import Service from "@/Componnent/Services/service";
import Subscribe from "@/Componnent/Subscribe/subscribe";
import Success from "@/Componnent/Sucess/sucess";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroPart />
        <Success />
        <AboutItem />
        <Service />
        <Experiance />
        <Blog />
        <Requard />
        <Subscribe />
      </Layout>
    </>
  );
}
