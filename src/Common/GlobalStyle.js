import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Roboto, sans-serif;
  font-size: 18px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  width: 100%;
  height: 100%;
  overflow: overlay;
}

#root {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
`;

export default GlobalStyle;
