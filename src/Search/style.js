import styled from "styled-components";
import borderStyle from "../Common/borderStyle";

export const StyledContainer = styled.div`
  width: 30%;
  padding: 18px 0;
`;

export const StyledWrapper = styled.div`
  ${borderStyle};
  padding-right: 7px`;

export const StyledSearch = styled.input.attrs({
  type: "text",
  id: "search",
  placeholder: "Search...",
  autocomplete: "off",
})`
  width: calc(100% - 30px);
  padding: 5px;
  font-size: 32px;
  border: none;
  //color: #bdbdbd;
  cursor: text;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    outline-offset: 0;
  }
`;

export const StyledDiv = styled.div`
  width: 30px;
  font-size: 32px;
  display: inline-block;
  background: url("https://api.iconify.design/ic:baseline-search.svg?color=%239E9E9E")
    no-repeat center center / contain;
  content: url("https://api.iconify.design/ic:baseline-search.svg?color=%239E9E9E&height=24");
  vertical-align: -0.125em;
`;
