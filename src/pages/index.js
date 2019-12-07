import React from "react";
import { Box, Heading, Flex, Link } from "rebass";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <Box
        as="header"
        width="100%"
        sx={{
          position: "fixed",
          zIndex: "2"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: "35px",
            top: "35px",
            cursor: "pointer",
            zIndex: "3"
          }}
        >
          Menu
        </Box>
        <Flex
          as="nav"
          height="100vh"
          bg="#333"
          display="block"
          flexDirection={["column", "column", "row"]}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          width="100%"
        >
          <Box width={[1, 1, 1 / 2]} textAlign="center">
            Branding
          </Box>
          <Flex
            flexDirection="column"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            width={[1, 1, 1 / 2]}
            minHeight="0"
          >
            <Box>
              <Link href="#">Home</Link>
            </Box>

            <Box>
              <Link href="#">About</Link>
            </Box>
            <Box>
              <Link href="#">Services</Link>
            </Box>
            <Box>
              <Link href="#">Projects</Link>
            </Box>
            <Box>
              <Link href="#">Blog</Link>
            </Box>
            <Box>
              <Link href="#">Store</Link>
            </Box>
            <Box>
              <Link href="#">Contact</Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box
        as="main"
        height="100vh"
        textAlign={["center", "center", "left"]}
        minHeight="calc(100vh - 60px)"
        p={["2rem", "4rem"]}
        color="white"
        sx={{
          backgroundImage:
            "linear-gradient(rgba(33, 33, 33, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1024x768?sky')",
          backgroundSize: "cover"
        }}
      >
        <Heading
          as="h1"
          fontSize={["5rem", "6rem"]}
          fontWeight="400"
          lineHeight="1"
          mb="1rem"
          pt="20vh"
          sx={{
            "& > span": {
              color: "#6b8e23"
            }
          }}
        >
          Jason <span>Quach</span>
        </Heading>
        <Heading
          as="h2"
          fontSize="1.5em"
          fontWeight="400"
          mb="2rem"
          py="0.2rem"
          px="1rem"
          bg="rgba(56, 56, 56, 0.5)"
        >
          Software Craftsman, Creator, Author, Advisor, Angel Investor &
          Entrepreneur
        </Heading>
      </Box>
      <Box as="section">About Section</Box>
      <Box as="section">Services Section</Box>
      <Box as="section">Projects Section</Box>
      <Box as="section">Blog Section</Box>
      <Box as="section">Store Section</Box>
      <Box as="section">Contact Section</Box>
    </Layout>
  );
};
