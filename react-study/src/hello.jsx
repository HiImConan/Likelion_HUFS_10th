import React from "react";
import styled from "styled-components";

function Hello() {
  const StyledButton = styled.button`
    color: red;
    background-color: grey;
  `;
  return (
    <>
      <StyledButton>나만의 버튼</StyledButton>
    </>
  );
}

export default Hello;
