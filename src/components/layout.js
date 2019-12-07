import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Box } from "rebass";
import theme from "../utils/theme";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box>{children}</Box>
  </ThemeProvider>
);

export default Layout;
