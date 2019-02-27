import { createGlobalStyle } from "styled-components";
import Montserrat from "./fonts";

export default createGlobalStyle`
  @font-face {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: normal;
      src: local("Montserrat"), url(${Montserrat})format("woff2");
  }
  html {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0px;
  }
`;
