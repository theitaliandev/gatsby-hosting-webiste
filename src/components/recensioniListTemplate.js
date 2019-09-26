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
        to={`/recensioni/pagina${i + 1}`}
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
      <Link to="/recensioni" style={{ textDecoration: "none", color: "#1659de" }}>
        Pagina Precedente
      </Link>
    );
  }
  if (i > 1) {
    return (
      <Link
        to={`/recensioni/pagina${i - 1}`}
        style={{ textDecoration: "none", color: "#1659de" }}
      >
        Pagina Precedente
      </Link>
    );
  }
}

const RecensioniListItem = styled.div`
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

const RecensioniList = ({ data, pageContext }) => {
  console.log(data)
  return (
    <Layout
      titolo="Recensioni"
      sottotitolo={pageContext.index > 0 ? `Pagina ${pageContext.index}` : ""}
    >
      <SEO
        title="Recensioni"
        keywords={[
          `recensioni migliori hosting per wordpress`,
          `recensioni hosting per wordpress`
        ]}
      />
      {data.allMarkdownRemark.edges.map(edge => {
        if(edge.node.frontmatter.postType === "recensione"){
          console.log("ci sono")
       return  <RecensioniListItem>
          <Img fixed={edge.node.frontmatter.thumbImage.childImageSharp.fixed} />
          <div>
            <Link
              to={`recensioni/${edge.node.frontmatter.slug}`}
              style={{ textDecoration: "none" }}
            >
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <p>{edge.node.excerpt}</p>
            <Link to={`recensioni/${edge.node.frontmatter.slug}`}>
              <button>Continua a leggere</button>
            </Link>
          </div>
        </RecensioniListItem>
      }
      else{
        console.log("non ci sono")
        return null}})}
      <PaginationButtonContainer>
        <div>{nextPage(pageContext.index, pageContext.numberOfPages)}</div>
        <div>{previousPage(pageContext.index, pageContext.numberOfPages)}</div>
      </PaginationButtonContainer>
    </Layout>
  );
};

export const recensioniPostsTitles = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {frontmatter: {postType: {eq: "recensione"}}}
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
            postType
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

export default RecensioniList;