import styled from 'styled-components';
import borderStyle from '../../styles/borderStyle';

export const StyledContainer = styled.div`
  width: 30%;
  min-width: 280px;
  padding: 18px 0;
  
  @media (max-width: 750px) {
    align-self: flex-end;
    padding: 5px 0;
  }
  
  @media (max-width: 550px) {
    align-self: center;
    width: 90%;
  }
`;

export const StyledWrapper = styled.div`
  ${borderStyle};
  padding-right: 7px`;

export const StyledSearch = styled.input.attrs({
  type:  props => props.text ,
})`
  width: calc(100% - 30px);
  padding: 5px;
  font-size: 32px;
  border: none;
  cursor: text;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    outline-offset: 0;
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  font-size: 32px;
  display: inline-block;
  background: url("https://api.iconify.design/ic:baseline-search.svg?color=%239E9E9E")
    no-repeat center center / contain;
  content: url("https://api.iconify.design/ic:baseline-search.svg?color=%239E9E9E&height=24");
  vertical-align: -0.125em;
`;
