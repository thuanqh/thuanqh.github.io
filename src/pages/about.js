import React from "react";
import Layout from "../components/layout";
import AboutMe from "../sections/about-me.mdx";
import { Box } from "theme-ui";

export default () => {
  return (
    <Layout>
      <Box>
        <h1>My Mission</h1>
      </Box>
      <AboutMe />
      <Box>
        <h1>Experience</h1>
      </Box>
      <Box>
        <h1>Skills</h1>
      </Box>
    </Layout>
  );
};
