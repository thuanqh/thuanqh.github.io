/** @jsx jsx */
import { jsx } from "theme-ui";

export default () => (
  <div sx={{ width: "100vw", height: "100vh" }}>
    <h1>Welcome to Jason's Tutorial</h1>
    <button
      sx={{
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "bold",
        m: 0,
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        variant: `buttons.primary`
      }}
    >
      Primary Button
    </button>
    <button
      sx={{
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "bold",
        m: 0,
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        variant: `buttons.secondary`
      }}
    >
      Secondary Button
    </button>
  </div>
);
