import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const MenuIcon = styled.div`
  color: blue;
  padding-right: 0.5rem;
  & > img {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const MenuName = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: 400;
`;

export const MenuCategory = styled.div`
  padding: 0.3rem;
  font-size: 0.6rem;
  color: gray;
`;
