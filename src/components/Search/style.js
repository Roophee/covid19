import styled from 'styled-components';
import borderStyle from '../../styles/borderStyle';

export const StyledContainer = styled.div`
  width: 31%;
  min-width: 280px;
  height: 80px;
  padding: 12px 32px 12px;
  color: #b2b2b2;
  ${borderStyle};

  @media (max-width: 950px) {
    align-self: flex-end;
    height: 60px;
    width: 45%;
  }

  @media (max-width: 660px) {
    align-self: center;
    width: 100%;
  }
`;

export const StyledWrapper = styled.div`
  padding-right: 7px;
`;

export const StyledSearch = styled.input`
  width: calc(100% - 30px);
  font-size: 48px;
  line-height: 56px;
  border: none;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    outline-offset: 0;
  }
  @media (max-width: 950px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
  background: url('https://api.iconify.design/ic:baseline-search.svg?color=%239E9E9E') no-repeat
    center center / contain;
  content: url('https://api.iconify.design/ic:baseline-search.svg?color=%239E9E9E&height=24');
  vertical-align: -0.125em;
`;
