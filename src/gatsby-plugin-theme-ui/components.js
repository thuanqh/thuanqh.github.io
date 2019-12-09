import React from "react";
import ServiceCard from "../components/service-card";

export default {
  ServiceCard: ({ link, title, bg, children }) => (
    <ServiceCard link={link} title={title} bg={bg}>
      {children}
    </ServiceCard>
  )
};
