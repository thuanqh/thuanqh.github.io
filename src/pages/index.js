import React from "react";
import { Box, Heading, Text } from "agonkit";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Box
      color="white"
      height="100vh"
      backgroundImage="url(https://source.unsplash.com/1600x900/?nature,water,forest)"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Heading>Jason Quach</Heading>
      <Text>
        Software Craftman, Creator, Author, Mentor, Angle Investor &
        Entrepreneur
      </Text>
    </Box>
  </Layout>
);
