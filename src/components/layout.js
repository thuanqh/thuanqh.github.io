import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/global-styles";
import { Box, theme } from "agonkit";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Box as="main">{children}</Box>
  </ThemeProvider>
);

export default Layout;
