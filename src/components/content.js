import React from "react";
import styled from "styled-components";

const StyledContent = styled.main`
  margin: 0px 100px;
  background: grey;
`;

const Content = ({ data }) => <StyledContent>{data}</StyledContent>;

export default Content;
