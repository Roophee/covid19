import { css } from "styled-components";

const borderStyle = css`
  border: none;
  border-radius: 10px;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  box-shadow: ${({ theme }) =>
    `2px 2px ${theme.borderColor}, -2px 2px ${theme.borderColor}`};
`;

export default borderStyle;
