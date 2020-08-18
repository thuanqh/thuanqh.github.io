import React from "react";
import { PageProps } from "gatsby";

export default function ErrorPage(props: PageProps) {
  return (
    <>
      <h1>Oops! Something went wrong.</h1>
      <p>{props.path}</p>
    </>
  );
}
