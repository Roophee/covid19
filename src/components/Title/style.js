import styled from 'styled-components';

const StyledTitle = styled.div`
  height: 84px;
  font-size: 72px;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;

  @media (max-width: 750px) {
    font-size: 3rem;
    font-weight: 500;
  }
`;

export default StyledTitle;
