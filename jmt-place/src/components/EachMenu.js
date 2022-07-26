import React from "react";
import styled from "styled-components";
import { Image } from "../assets/Image";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const MenuIcon = styled.div`
  color: blue;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
`;

const MenuInfo = styled.div`
  display: block;
`;

const MenuName = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: 600;
`;

const MenuCategory = styled.div`
  font-size: 0.5rem;
  color: gray;
`;

const EachMenu = ({ id, name, category }) => {
  function whatKindOfThisFoodIs(category) {
    switch (category) {
      case "kr":
        return Image.kr;
      case "cn":
        return Image.cn;
      case "jp":
        return Image.jp;
      case "west":
        return Image.west;
      case "coffee":
        return Image.coffee;
      default:
        return Image.def;
    }
  }
  return (
    <MenuWrapper>
      <MenuIcon>
        <img src={`${whatKindOfThisFoodIs}`} alt="Icon" />
      </MenuIcon>
      <MenuInfo>
        <MenuName>{name}</MenuName>
        <MenuCategory>{category}</MenuCategory>
      </MenuInfo>
    </MenuWrapper>
  );
};

export default EachMenu;
