import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const PostHero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <GatsbyImage
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
        className="post-hero"
      />
    )}
  </>
);

export default PostHero;
