import React from "react";
import { Box, Heading } from "agonkit";
import css from "@styled-system/css";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <Box
        color="white"
        bg="grey.900"
        height="100vh"
        backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(33, 33, 33, 0.9)), url(https://source.unsplash.com/random/1600x900/?nature)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        css={css({
          backgroundAttachment: "fixed"
        })}
      >
        <Box p="4rem">
          <Heading
            as="h1"
            mt="20vh"
            fontWeight={400}
            fontSize={["5rem", "6rem"]}
            lineHeight={[0, 3]}
            textAlign={["center", "left"]}
          >
            Jason Quach
          </Heading>
          <Heading
            as="h2"
            fontWeight={400}
            textAlign={["center", "left"]}
            fontSize="1.5em"
            mb="2rem"
            px="0.2rem"
            py="1rem"
          >
            Software Craftsman, Creator, Author, Mentor, Angel Investor &
            Entrepreneur
          </Heading>
        </Box>
      </Box>
    </Layout>
  );
};
