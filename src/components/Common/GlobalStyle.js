import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  :root {
    font-family: Roboto, sans-serif;
    font-size: 18px;
    color: #000;
    
    @media( min-width: 1500px) {
      font-size: 28px;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.bgc};
    color: ${({ theme }) => theme.fontColor}
    width: 100%;
    height: 100%;
    overflow: overlay;
  }
`;

export default GlobalStyle;
