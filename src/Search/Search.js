import React from "react";
import {
  StyledSearch,
  StyledDiv,
  StyledContainer,
  StyledWrapper,
} from "./style";

const Search = () => (
  <StyledContainer>
    <StyledWrapper>
      <StyledSearch />
      <StyledDiv>
        <i className="fas fa-search" />
      </StyledDiv>
    </StyledWrapper>
  </StyledContainer>
);

export default Search;
