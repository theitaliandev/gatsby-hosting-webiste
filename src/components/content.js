import React from "react";
import styled from "styled-components";

const StyledContent = styled.main`
  margin: 20px 100px;
`;

const Content = ({ data }) => <StyledContent>{data}</StyledContent>;

export default Content;
