import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  display: inline-block;
  font-size: 54px;
  font-weight: 700;
  line-height: 1.4;
  text-transform: uppercase;
  justify-self: start;
  
  @media (max-width: 400px){
    font-size: 2.7rem;
    font-weight: 500;
  }
`;

const Title = () => <StyledTitle><span>Statistic</span></StyledTitle>;

export default Title;
