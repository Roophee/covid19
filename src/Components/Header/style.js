import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0;

  @media (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export default StyledHeader;
