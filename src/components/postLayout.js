import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "./layout";

const StyledDiv = styled.div`
  h2 {
    margin-bottom: 35px;
  }
`;

const PostLayout = props => {
  const { markdownRemark } = props.data;
  return (
    <Layout titolo={markdownRemark.frontmatter.title}>
      <p style={{ margin: "20px 0px" }}>
        <span role="img" aria-label="time">
          🕒
        </span>
        <span style={{ fontWeight: "bold" }}>Tempo di lettura:</span>{" "}
        {markdownRemark.timeToRead} minuti
      </p>
      <StyledDiv dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
