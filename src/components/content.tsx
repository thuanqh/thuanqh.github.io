/** @jsx jsx */
import { jsx } from "theme-ui";
import { ParallaxLayer } from "@react-spring/parallax";

type ContentProps = {
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
}

const Content = ({ speed, offset, children, className = ``, factor = 1 }) => (
  <ParallaxLayer
    className={className}
    sx={{
      p: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
  >
    {children}
  </ParallaxLayer>
);

export default Content;
