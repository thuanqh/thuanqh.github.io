/** @jsx jsx */
import { jsx } from "theme-ui";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const Divider = ({
  speed,
  offset,
  factor,
  bg,
  fill,
  clipPath,
  children,
  className
}) => (
  <ParallaxLayer
    sx={{
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`
      },
      clipPath
    }}
    speed={speed}
    offset={offset}
    factor={factor || 1}
    className={className}
  >
    {children}
  </ParallaxLayer>
);

export default Divider;
