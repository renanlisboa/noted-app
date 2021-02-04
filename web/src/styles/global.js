import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    background: #fff;
    -webkit-font-smoothing: antialiased !important;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Lato', sans-serif;
  }

  :root {
    --primary: #f5f5f5;
    --secondary: #ffffff;
    --terceary: #1e90ff;

    --text: #000000;
    --light-text: #333333;
    --input-field: #eeeeee;
    --input-text: #999999;

    --success: #04d361;
    --error: #ea2121;
    --warning: #f8921e;
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
