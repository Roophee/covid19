import React, { useState, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import StyledApp from './style';
import GlobalStyle from '../Common/GlobalStyle';
import { getCountryListFromAPI } from '../../data/APIHndlers';
import { filterDataOnSearch } from '../../data/dataHandlers';
import { primary } from '../../styles/themes';
import Preloader from '../Preloader';
import Header from '../Header';
import Main from '../Main';
import ModalLocal from '../Popup';

function App() {
  const [countriesInfo, setCountriesNames] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [getPopupIsOpen, setPopupIsOpen] = useState(false);
  const [countryDetailInfo, setCountryDetailInfo] = useState({});

  useEffect(() => {
    getCountryListFromAPI().then((data) => {
      if (data)
        setCountriesNames(data.Countries);
    });
  }, []);


  return (
    <StyledApp id="App">
      <ThemeProvider theme={primary}>
        <GlobalStyle />
        <ModalLocal
          open={getPopupIsOpen}
          setPopupIsOpen={setPopupIsOpen}
          countryDetailInfo={countryDetailInfo}
        />
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        {!countriesInfo &&  <Preloader />}
        {countriesInfo && (
          <Main
            setPopupIsOpen={setPopupIsOpen}
            setCountryDetailInfo={setCountryDetailInfo}
            countriesInfo={
              searchValue
                ? filterDataOnSearch(countriesInfo, searchValue)
                : countriesInfo
            }
          />
        )}
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
