import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Title from '../components/Title';

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
