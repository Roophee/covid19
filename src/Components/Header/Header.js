import React from 'react';
import StyledHeader from './style';
import LogoPanel from '../../hoc/LogoPanel';
import Search from '../Search';

const Header = () => (
  <StyledHeader>
    <LogoPanel />
    <Search />
  </StyledHeader>
);

export default Header;
