import React, { useCallback } from 'react';
import {
  StyledCountryItem,
  StyledCountryName,
  StyledCountryValue,
  StyledCountryNumber,
} from './style';

const CountryItem = (props) => {
  const { setPopupIsOpen, setCountryDetailInfo, country, index, tableHeader } =
    props;

  const onClickHandler = useCallback((e) => {
    setPopupIsOpen((prev) => !prev);
    setCountryDetailInfo(country);
  }, []);

  return (
    <StyledCountryItem
      tableHeader={tableHeader}
      onClick={!tableHeader ? onClickHandler : null}
    >
      <StyledCountryNumber>{index} </StyledCountryNumber>
      <StyledCountryName tableHeader={tableHeader}>{country.Country}</StyledCountryName>
      <StyledCountryValue tableHeader={tableHeader}>
        {country.TotalConfirmed}
      </StyledCountryValue>
    </StyledCountryItem>
  );
};

export default CountryItem;
