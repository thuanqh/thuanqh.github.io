import React from "react";
import { PageProps } from "gatsby";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "../components/layout";
import Contact from "../components/contact";

export default function AboutPage(props: PageProps) {
  return (
    <Layout>
      <Parallax pages={6}>
        <Contact offset={5} />
      </Parallax>
    </Layout>
  );
}
