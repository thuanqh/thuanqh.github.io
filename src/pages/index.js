import React from "react";
import { Box, Heading } from "@theme-ui/components";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <Box as="section">
        <Heading as="h1">
          Jason <span>Quach</span>
        </Heading>
        <Heading>
          Software Craftsman, Creator, Author, Mentor, Angle Investor &
          Entrepreneur
        </Heading>
      </Box>
    </Layout>
  );
};
