import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import GlobalStyle from "../shared/css/globalStyle";
import Header from "./header";
import Jumbotron from "./jumbotron";
import Content from "./content";
import Footer from "./footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Jumbotron />
          <Content data={children} />
          <Footer />
        </Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
