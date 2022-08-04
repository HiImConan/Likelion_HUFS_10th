import styled, { css } from "styled-components";

export const PageNumSection = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageNumDiv = styled.div`
  margin: 0.5rem;
  &.isActive {
    color: #2c4172;
  }
`;
export const ArrowButton = styled.button`
  ${(props) =>
    props.disabled
      ? css`
          display: none;
        `
      : css`
          cursor: pointer;
        `};
`;
