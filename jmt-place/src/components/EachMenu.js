import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  function whatKindThisFood(category) {
    switch (category) {
      case "kr":
        return "rice";
      case "cn":
        return "buns";
      case "jp":
        return "sushi";
      case "west":
        return "burger";
      case "coffee":
        return "coffee";
      default:
        return "restaurant";
    }
  }
  return (
    <MenuWrapper>
      <MenuIcon>
        <img src={`../img/${whatKindThisFood}.png`} alt="Icon" />
      </MenuIcon>
      <MenuInfo>
        <MenuName>{name}</MenuName>
        <MenuCategory>{category}</MenuCategory>
      </MenuInfo>
    </MenuWrapper>
  );
};

export default EachMenu;
