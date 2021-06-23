import React from 'react';
import StyledLogo from './style';
import covidLogo from '../../img/covid.png';

const Logo = () => (
  <a href="https://github.com/Roophee/covid19" target="_blank" rel="noreferrer">
    <StyledLogo src={covidLogo} alt="covid19-logo" />
  </a>
);

export default Logo;
