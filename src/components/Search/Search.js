import React, { useCallback } from 'react';
import { StyledSearch, IconWrapper, StyledContainer, StyledWrapper } from './style';

const Search = ({ searchValue, setSearchValue }) => {
  const onChangeHandler = useCallback(
    e => {
      setSearchValue(e.target.value.trim());
    },
    [setSearchValue]
  );
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledSearch
          value={searchValue}
          onChange={onChangeHandler}
          type="text"
          id="search"
          placeholder="Search..."
          autocomplete="off"
        />
        <IconWrapper>
          <i className="fas fa-search" />
        </IconWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Search;
