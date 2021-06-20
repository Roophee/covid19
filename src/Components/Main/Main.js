import React from 'react';
import StyledMain from './style';
import CountryItem from '../CountryItem';

const headerValues = {
  Country: 'Country',
  TotalConfirmed: 'Total Confirmed',
};

const Main = (props) => {
  const { countriesInfo, theme } = props;
  console.log(props);
  return (
    <StyledMain>
      <CountryItem tableHeader country={headerValues} index="№" />
      {countriesInfo.map((country, index) => (
        <CountryItem country={country} index={index + 1} key={country.Slug} />
      ))}
       </StyledMain>
  );
};

export default Main;
