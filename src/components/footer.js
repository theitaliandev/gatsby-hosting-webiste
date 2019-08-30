import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: white;
  text-align: center;
  border-top: 0.5px solid grey;
  padding: 1rem;
  a {
    text-decoration: none;
    color: #1659de;
  }
  span {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <span>NeuWP - Migliori Hosting Wordpress</span>&nbsp;PI: 03592930782
    </div>
    <div>
      © {new Date().getFullYear()}, Made with ❤️ and built with&nbsp;
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </StyledFooter>
);

export default Footer;
