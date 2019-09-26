import React from "react";
import { graphql } from "gatsby";

import Layout from "./layout";

const PostLayout = props => {
  const { markdownRemark } = props.data;
  return (
    <Layout titolo={markdownRemark.frontmatter.title}>
      <p>Tempo di lettura: {markdownRemark.timeToRead} minuti</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  );
};

export const query = graphql`
  query FetchPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
      }
    }
  }
`;

export default PostLayout;
