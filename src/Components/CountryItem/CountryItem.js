import React from 'react';
import {
  StyledCountryItem,
  StyledCountryName,
  StyledCountryValue,
  StyledCountryNumber,
} from './style';

const CountryItem = (props) => {
  console.log(props);
  return (
    <StyledCountryItem {...props}>
      <StyledCountryNumber>{props.index} </StyledCountryNumber>
      <StyledCountryName>{props.country.Country}</StyledCountryName>
      <StyledCountryValue>{props.country.TotalConfirmed}</StyledCountryValue>
    </StyledCountryItem>
  );
};

export default CountryItem;
