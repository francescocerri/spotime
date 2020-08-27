import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    #app {
      height: 100%;
    }
  }
`;

export default GlobalStyle;
