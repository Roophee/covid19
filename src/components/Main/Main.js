import React, { useState } from 'react';
import StyledMain from './style';
import CountryItem from '../CountryItem';
import SortPanel from '../SortPanel';
import { getSortFunction } from '../../data/dataHandlers';

const headerValues = {
  Country: 'Country',
  TotalConfirmed: 'Total Confirmed',
};

const Main = props => {
  const { countriesInfo, setPopupIsOpen, setCountryDetailInfo } = props;
  const [sortType, setSortType] = useState(undefined);

  if (sortType) {
    countriesInfo.sort(getSortFunction(sortType));
  }

  return (
    <StyledMain>
      <CountryItem tableHeader country={headerValues} index="№" />
      <SortPanel setSortType={setSortType} sortType={sortType} />
      {countriesInfo.map((country, index) => (
        <CountryItem
          country={country}
          setCountryDetailInfo={setCountryDetailInfo}
          setPopupIsOpen={setPopupIsOpen}
          index={index + 1}
          key={country.Slug}
        />
      ))}
    </StyledMain>
  );
};

export default Main;
