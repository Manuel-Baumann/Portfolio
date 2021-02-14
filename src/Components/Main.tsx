import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  background-color: purple;
  height: 90vh;
  color: red;
`;

export const Main: React.FC = () => {
  return <StyledMain>Main</StyledMain>;
};
