import React from "react";
import styled from "styled-components";
import Image from "../assets/Image";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 0.5rem;
`;

const MenuIcon = styled.div`
  color: blue;
  padding-right: 0.5rem;
  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }
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
    console.log(`category: ${category}`);
    switch (category) {
      case "한식":
        return Image.kr;
      case "중식":
        return Image.cn;
      case "일식":
        return Image.jp;
      case "양식":
        return Image.west;
      case "카페":
        return Image.coffee;
      default:
        return Image.def;
    }
  }
  return (
    <MenuWrapper>
      <MenuIcon>
        <img src={`${whatKindOfThisFoodIs(category)}`} alt="Icon" />
      </MenuIcon>
      <MenuInfo>
        <MenuName>{name}</MenuName>
        <MenuCategory>{category}</MenuCategory>
      </MenuInfo>
    </MenuWrapper>
  );
};

export default EachMenu;
