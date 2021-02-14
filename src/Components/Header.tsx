import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: red;
  height: 5vh;
  color: blue;
`;

export const Header: React.FC = () => {
  return <StyledHeader>Header</StyledHeader>;
};
