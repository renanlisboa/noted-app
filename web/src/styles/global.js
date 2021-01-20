import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased !important;
  }

  /* h1, h2, h3, h4, h5, h6, p, span, a {
    color: #222;
  } */

  /* body, input {
    color: #222;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  } */

  /* button {
    color: #222;
    cursor: pointer;
  } */
`;
