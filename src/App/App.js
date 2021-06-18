import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Common/GlobalStyle";
import Header from "../Header";
import { primary } from "../styles/themes"

function App() {
  return (
    <>
      <ThemeProvider theme={primary}>
        <GlobalStyle/>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
