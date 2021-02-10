import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #f5f5f5;
    --secondary: #ffffff;
    --terceary: #1e90ff;

    --standard-link: #0077cc;
    --button-hover: #1e80ff;

    --text: #000000;
    --light-text: #333333;
    --input-field: #eeeeee;
    --input-placeholder: #999999;

    --success: #04d361;
    --error: #ea2121;
    --warning: #f8921e;
  }

  html, body, #root {
    min-height: 100%;
    background: var(--primary);
    -webkit-font-smoothing: antialiased !important;
  }

  *, button, input {
    border: 0;
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, p, svg {
    color: --var(--text);
  }

  button {
    background: var(--terceary);
    color: var(--secondary);
    cursor: pointer;
  }
`;
