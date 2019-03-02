import { createGlobalStyle } from "styled-components";
import { MontserratRegular, MontserratBold } from "./fonts";

export default createGlobalStyle`
  @font-face {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: normal;
      src: local("MontserratRegular"), url(${MontserratRegular})format("woff2");
  }
  @font-face {
    font-family: "Montserrat";
    font-style: bold;
    font-weight: bold;
    src: local("MontserratBold")url(${MontserratBold}format("woff2"));
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
