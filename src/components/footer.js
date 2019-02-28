import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.5px solid grey;
  padding: 1rem;
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
);

export default Footer;
