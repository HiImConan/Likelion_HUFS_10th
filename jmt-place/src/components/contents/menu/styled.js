import styled from "styled-components";
import Image from "../assets/Image";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 1rem;
`;

export const MenuIcon = styled.div`
  color: blue;
  padding-right: 0.5rem;
  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const MenuName = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: 400;
`;

export const MenuCategory = styled.div`
  font-size: 0.5rem;
  color: gray;
`;
