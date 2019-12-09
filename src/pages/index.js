import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";

export default () => {
  return (
    <Layout>
      <Parallax pages={5}>
        <Hero offset={0} />
        <Services offset={1} />
        <About offset={3} />
        <Contact offset={4} />
      </Parallax>
    </Layout>
  );
};
