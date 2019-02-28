import React from "react";
import styled from "styled-components";

const StyledJumbotron = styled.div`
  background: #1659de;
  height: auto;
  text-align: center;
  padding: 0.5rem;
  h2 {
    font-size: 2.6rem;
    color: white;
  }
  h3 {
    font-size: 1.6rem;
    color: #bbdefb;
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    padding: 4.5rem;
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
`;

const Jumbotron = () => (
  <StyledJumbotron>
    <h2>Migliori Hosting per Wordpress</h2>
    <h3>In base ad uptime, velocità di caricamento e costo...</h3>
  </StyledJumbotron>
);

export default Jumbotron;
