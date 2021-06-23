import styled from 'styled-components';

const StyledTitle = styled.div`
  height: 84px;
  font-size: 72px;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;

  @media (max-width: 400px) {
    font-size: 2.7rem;
    font-weight: 500;
  }
`;

export default StyledTitle;
