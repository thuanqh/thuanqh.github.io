/** @jsx jsx */
import { jsx } from "theme-ui";

export default props => (
  <div
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      variant: "layout.root"
    }}
  >
    <header
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        variant: "layout.header"
      }}
    >
      Header content
    </header>
    <main
      sx={{
        width: "100%",
        flex: "1 1 auto"
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: "auto",
          px: 3
        }}
      >
        {props.children}
      </div>
    </main>
    <footer
      sx={{
        width: "100%"
      }}
    >
      Footer content
    </footer>
  </div>
);
