import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";

export default () => {
  return (
    <Layout>
      <SEO
        title="Jason's Portfolio"
        keywords={[
          `jason`,
          `quach`,
          `huu`,
          `thuan`,
          `portfolio`,
          `blog`,
          `tutorial`
        ]}
      />
      <Parallax pages={6}>
        <Hero offset={0} />
        <Services offset={1} />
        <About offset={3.5} />
        <Contact offset={5} />
      </Parallax>
    </Layout>
  );
};
