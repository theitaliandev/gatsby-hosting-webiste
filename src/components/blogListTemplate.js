import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import Layout from "./layout";
import SEO from "./seo";

function nextPage(i, numPages) {
  if (i < numPages - 1) {
    return (
      <Link
        to={`/blog/pagina${i + 1}`}
        style={{ textDecoration: "none", color: "#1659de" }}
      >
        Prossima Pagina
      </Link>
    );
  }
}
function previousPage(i) {
  if (i === 0) return;
  if (i === 1) {
    return (
      <Link to="/blog" style={{ textDecoration: "none", color: "#1659de" }}>
        Pagina Precedente
      </Link>
    );
  }
  if (i > 1) {
    return (
      <Link
        to={`/blog/pagina${i - 1}`}
        style={{ textDecoration: "none", color: "#1659de" }}
      >
        Pagina Precedente
      </Link>
    );
  }
}

const BlogListItem = styled.div`
  text-align: center;
  button {
    background: white;
    font-size: 1.3rem;
    color: grey;
    padding: 1rem;
    border: 0.15rem solid lightgray;
    border-radius: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    &:hover {
      color: #1659de;
      border: 0.15rem solid #1659de;
      font-size: 1.4rem;
    }
  }
  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  @media (min-width: 1191px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }
`;

const PaginationButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 1rem;
`;

const BlogList = ({ data, pageContext }) => {
  return (
    <Layout
      titolo="Blog"
      sottotitolo={pageContext.index > 0 ? `Pagina ${pageContext.index}` : ""}
    >
      <SEO
        title="Blog"
        keywords={[
          `blog migliori hosting per wordpress`,
          `blog hosting per wordpress`
        ]}
      />
      {data.allMarkdownRemark.edges.map(edge => (
        <BlogListItem>
          <Img fixed={edge.node.frontmatter.thumbImage.childImageSharp.fixed} />
          <div>
            <Link
              to={`blog/${edge.node.frontmatter.slug}`}
              style={{ textDecoration: "none" }}
            >
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <p>{edge.node.excerpt}</p>
            <Link to={`blog/${edge.node.frontmatter.slug}`}>
              <button>Continua a leggere</button>
            </Link>
          </div>
        </BlogListItem>
      ))}
      <PaginationButtonContainer>
        <div>{nextPage(pageContext.index, pageContext.numberOfPages)}</div>
        <div>{previousPage(pageContext.index, pageContext.numberOfPages)}</div>
      </PaginationButtonContainer>
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
          excerpt
          frontmatter {
            title
            slug
            thumbImage {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogList;
