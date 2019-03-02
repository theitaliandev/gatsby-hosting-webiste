import React from "react";
import styled from "styled-components";

const StyledContent = styled.main`
  margin: 20px 40px;
  line-height: 30px;
  font-size: 1.1rem;
  @media (min-width: 481px) {
    margin: 20px 80px;
    line-height: 32px;
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    margin: 20px 120px;
    line-height: 34px;
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    margin: 20px 200px;
    line-height: 36px;
    font-size: 1.3rem;
  }
`;

const Content = ({ data }) => <StyledContent>{data}</StyledContent>;

export default Content;
