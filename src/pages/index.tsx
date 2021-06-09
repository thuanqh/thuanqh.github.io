import React from "react";
import { PageProps } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";

export default function IndexPage(props: PageProps) {
  return (
    <Layout>
      <SEO
        title="Jason's Portfolio"
      />
      <Parallax pages={6}>
        <Hero offset={0} />
        <Services offset={1} />
        <About offset={4} />
        <Contact offset={5} />
      </Parallax>
    </Layout>
  );
}
