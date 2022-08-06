import styled, { css } from "styled-components";

export const PaginationSection = styled.div`
  position: absolute;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const PageNumDiv = styled.div`
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
