import styled from 'styled-components';
import borderStyle from '../../styles/borderStyle';

export const StyledCountryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ tableHeader, theme }) => tableHeader ? theme.tableHeaderBgc : 'inherit'};
  background: ${({ tableHeader, theme }) => tableHeader ? theme.tableHeaderColor: 'inherit'};
  ${borderStyle};
`;

export const StyledCountryName = styled.div`
  padding: 20px;
  width: 75%;
`;

export const StyledCountryValue = styled.div`
  width: 25%;
  padding: 20px;
  border-left: ${ ({theme}) => `1px ${theme.borderColor} #000`};
`;
export const StyledCountryNumber = styled.div`
  padding: 20px;
  padding-right: 50px`
