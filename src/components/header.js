import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";

const StyledNav = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1,
  a  {
    -webkit-clip-path: polygon(0 0, 100% 0%, 87% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 87% 100%, 0% 100%);
    background: #1659de;
    padding: 0.4rem 1.4rem;
    text-decoration: none;
    color: white;
    font-size: 0.9rem;
    height: 58px;
    @media (min-width: 768px) {
      height: 70px;
      h1,
      a {
        font-size: 1.2rem;
      }
      span {
        font-size: 1.7rem;
      }
    }
    span {
      font-size: 1.2rem;
    }
  }
  .menu-icon {
    font-size: 2.2rem;
    margin-right: 0.8rem;
    color: #1659de;
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const StyledMenu = styled.ul`
  padding-inline-start: 0rem;
  padding: 1.5rem 0rem 0rem 0rem;
  background: #1659de;
  height: ${props => (props.toggleState ? "140" : "0")};
  overflow: hidden;
  li {
    list-style-type: none;
  }
  a {
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    display: block;
    font-weight: 700;
    color: white;
    transition: all 0.4s linear;
    &:hover {
      background: white;
      color: #1659de;
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  @media (min-width: 768px) {
    height: auto;
    background: white;
    display: flex;
    padding: 0.5rem 0rem;
    a {
      color: #1659de;
      &:hover {
        padding: 0.5rem 1rem 0.5rem 1rem;
      }
    }
  }
`;

export default class Header extends React.Component {
  state = {
    navbarOpen: false
  };
  handleNavbar = () => {
    this.setState(() => {
      return {
        navbarOpen: !this.state.navbarOpen
      };
    });
  };
  render() {
    return (
      <StyledNav>
        <HeaderWrapper>
          <Link to="/">
            <h1>
              Wordpress <span>Hosting</span>
            </h1>
          </Link>
          <MdMoreHoriz
            className="menu-icon"
            onClick={() => this.handleNavbar()}
          />
        </HeaderWrapper>
        <StyledMenu toggleState={this.state.navbarOpen}>
          <Link to="recensioni">
            <li>Recensioni</li>
          </Link>
          <Link to="blog">
            <li>Blog</li>
          </Link>
          <Link to="contattaci">
            <li>Contattaci</li>
          </Link>
          <Link to="chi-siamo">
            <li>Chi Siamo</li>
          </Link>
        </StyledMenu>
      </StyledNav>
    );
  }
}
