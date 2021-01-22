import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
  overflow: hidden;
}
body, html {
  background: #eee;
  font-family: 'Berlin Sans FB', 'Berlin Sans FB', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
 
}
`;
