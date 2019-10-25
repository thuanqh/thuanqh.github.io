import React from "react";
import { Box, Heading, Text } from "agonkit";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <Box
      color="white"
      bg="grey.900"
      height="100vh"
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1024x768)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
    >
      <Heading m={0} fontWeight={400} fontSize={["2rem", "6rem"]}>Jason Quach</Heading>
      <Text>
        Software Craftsman, Creator, Author, Mentor, Angel Investor &
        Entrepreneur
      </Text>
    </Box>
  </Layout>
);
