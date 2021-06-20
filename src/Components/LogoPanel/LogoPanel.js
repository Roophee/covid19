import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Title from '../Title';

const StyledLogoPanel = styled.div`
  display: flex;
`;

const LogoPanel = () => (
  <StyledLogoPanel>
    <Logo />
    <Title />
  </StyledLogoPanel>
);

export default LogoPanel;
