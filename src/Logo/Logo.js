import React from "react";
import styled from "styled-components";
import CovidLogo from "../img/covid-logo.jpg";

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const Logo = () => <StyledLogo src={CovidLogo} alt="covid19-logo" />;

export default Logo;
