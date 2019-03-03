import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  html {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0px;
  }
`;
