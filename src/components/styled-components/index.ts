import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #FAFAFA;
  }

  button, a, p, h1,
  h2, h3, h4, h5,
  ul, li, input {
    margin: 0;
    padding: 0;
  }

  @keyframes ripple {
    to{
      transform: scale(1.5);
      opacity: 0;
    }
  }

  .ripple {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    animation: ripple .4s linear;
    transform: scale(0);
    pointer-events: none;
  }
`;
