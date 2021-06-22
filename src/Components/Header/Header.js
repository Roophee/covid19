import React from 'react';
import StyledHeader from './style';
import LogoPanel from '../LogoPanel';
import Search from '../Search';

const Header = ({ searchValue, setSearchValue }) => (
  <StyledHeader>
    <LogoPanel />
    <Search searchValue={searchValue} setSearchValue={setSearchValue} />
  </StyledHeader>
);

export default Header;
