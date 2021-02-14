import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: brown;
  height: 3vh;
  color: purple;
`;

export const Footer: React.FC = () => {
  return <StyledFooter>Footer</StyledFooter>;
};
