import React from "react";
import Layout from "./layout.js";
import PostList from "./post-list";

const Posts = ({ data }) => {
  const posts = data.allBlogPost.nodes;
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};

export default Posts;
