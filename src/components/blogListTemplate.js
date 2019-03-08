import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Layout from "./layout";

const BlogList = ({ data, pageContext }) => {
  function nextPage(i, numPages) {
    if (i < numPages - 1) {
      return <Link to={`/blog/pagina${i + 1}`}>Prossima Pagina</Link>;
    }
  }
  function previousPage(i, numPages) {
    if (i === 0) return;
    if (i === 1) {
      return <Link to="/blog">Pagina Precedente</Link>;
    }
    if (i > 1) {
      return <Link to={`/blog/pagina${i - 1}`}>Pagina Precedente</Link>;
    }
  }
  return (
    <Layout>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.title}>
            <Link to={`blog/${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
      <div>{nextPage(pageContext.index, pageContext.numberOfPages)}</div>
      <div>{previousPage(pageContext.index, pageContext.numberOfPages)}</div>
    </Layout>
  );
};

export const blogPostsTitles = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
