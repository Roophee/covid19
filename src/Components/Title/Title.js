import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  display: inline-block;
  font-size: 54px;
  font-weight: 700;
  line-height: 1.4;
  text-transform: uppercase;
  justify-self: start;
`;

const Title = () => <StyledTitle><span>Statistic</span></StyledTitle>;

export default Title;
