import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Common/GlobalStyle';
import Header from '../Header';
import Main from '../Main';
import { primary } from '../../styles/themes';
import { getCountryListFromAPI } from '../../data/APIHndlers';
import Preloader from '../Preloader';

function App() {

  const [countriesInfo, setCountriesNames] = useState(null);

  useEffect(() => {
    getCountryListFromAPI().then((json) => {
      setCountriesNames( json.Countries);
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={primary}>
        <GlobalStyle />
        <Header />
        {!countriesInfo && <Preloader/>}
        {countriesInfo && <Main countriesInfo={countriesInfo}/>}
      </ThemeProvider>
    </>
  );
}

export default App;
