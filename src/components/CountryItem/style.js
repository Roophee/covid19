import styled from 'styled-components';
import borderStyle from '../../styles/borderStyle';

export const StyledCountryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 10px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({ tableHeader, theme }) => (tableHeader ? theme.tableHeaderColor : 'inherit')};
  background: ${({ tableHeader, theme }) => (tableHeader ? theme.tableHeaderBgc : 'inherit')};
  ${borderStyle};
`;

export const StyledCountryName = styled.div`
  width: 75%;
  padding: 20px;
  border-left: ${props => `1px solid ${props.tableHeader ? props.theme.borderColor : '#B2B2B2'}`};

  @media (max-width: 550px) {
    width: 50%;
    padding: 20px 0;
  }
`;

export const StyledCountryValue = styled.div`
  width: 25%;
  padding: 20px;
  border-left: ${props => `1px solid ${props.tableHeader ? props.theme.borderColor : '#B2B2B2'}`};

  @media (max-width: 700px) {
    padding: 20px 10px;
  }

  @media (max-width: 550px) {
    width: 35%;
  }

  @media (max-width: 400px) {
    padding: 20px 5px;
  }
`;
export const StyledCountryNumber = styled.div`
  padding: 20px;
  padding-right: 50px;

  @media (max-width: 550px) {
    padding: 20px 0;
  }
`;
