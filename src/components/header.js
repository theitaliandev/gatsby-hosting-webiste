import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  align-items: center;
`;

const StyledTitle = styled.div`
  background: #1659de;
  padding: 12px;
  text-align: right;
  a,
  h1 {
    color: white;
    font-weight: 400;
    font-size: 18px;
    text-decoration: none;
    margin-right: 6px;
    span {
      font-weight: bolder;
      font-size: 20px;
    }
  }
`;

const StyledAbout = styled.div`
  text-align: center;
  margin-left: 20px;
  p {
    font-size: 16px;
    display: inline;
    margin: 7px;
    color: grey;
  }
`;

const StyledBlog = styled.div`
  margin-right: 150px;
  justify-self: right;
  font-size: 16px;
  font-weight: bolder;
  p {
    display: inline;
    color: #2665e0;
    padding: 7px 17px;
    border: 1px solid #2665e0;
    border-radius: 4px;
  }
  .recensioni {
    border: none;
    margin-right: 10px;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledTitle>
      <h1>
        <Link to="/">
          Wordpress&nbsp;<span>hosting</span>
        </Link>
      </h1>
    </StyledTitle>
    <StyledAbout>
      <p />
      <p>Chi sono</p>
      <p>Contattami</p>
    </StyledAbout>
    <StyledBlog>
      <div>
        <p className="recensioni">Recensioni</p>
        <p>Blog</p>
      </div>
    </StyledBlog>
  </StyledHeader>
);

export default Header;
