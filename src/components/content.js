/** @jsx jsx */
import { jsx } from "theme-ui";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const Content = ({ speed, offset, children, className, factor }) => (
  <ParallaxLayer
    className={className}
    sx={{
      p: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50
    }}
    speed={speed}
    offset={offset}
    factor={factor || 1}
  >
    {children}
  </ParallaxLayer>
);

export default Content;
