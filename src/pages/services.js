import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "../components/layout";
import Services from "../components/services";
import Contact from "../components/contact";

export default () => {
  return (
    <Layout>
      <Parallax pages={6}>
        <Services offset={1} />
        <Contact offset={5} />
      </Parallax>
    </Layout>
  );
};
