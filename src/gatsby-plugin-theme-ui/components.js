/** @jsx jsx */
import { jsx } from "theme-ui";
import Prism from "@theme-ui/prism";
import ServiceCard from "../components/service-card";

export default {
  pre: (props) => props.children,
  code: Prism,
  ServiceCard: ({ link, title, bg, children }) => (
    <ServiceCard link={link} title={title} bg={bg}>
      {children}
    </ServiceCard>
  ),
};
