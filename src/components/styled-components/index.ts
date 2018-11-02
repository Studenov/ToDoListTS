import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #ffffff;
    margin: 0;
    padding: 0;
  }

  button, a, p, h1, h2, h3, h4, h5, ul, li {
    margin: 0;
    padding: 0;
  }
`;
