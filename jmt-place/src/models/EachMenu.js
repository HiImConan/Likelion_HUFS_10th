import React, { useEffect } from "react";
import styled from "styled-components";

import Image from "../assets/Image";
import CartCheckbox from "../components/CartCheckbox";

import { useRecoilState } from "recoil";
import { menuItemListState } from "../assets/atom";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 1rem;
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

function whatKindOfThisFoodIs(category) {
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
const EachMenu = ({ id, name, category, isChecked }) => {
  const [menuItem, setMenuItem] = useRecoilState(menuItemListState);

  const toggleCartItem = (id, name) => {
    setMenuItem(() => {
      menuItem.map((obj) => {
        console.log(menuItem);
        if ((obj.id === id) & !obj.isChecked) {
          alert(`${name}이(가) 찜 목록에 추가되었습니다!`);
          return { ...obj, isChecked: true };
        } else if ((obj.id === id) & obj.isChecked) {
          alert(`이미 추가되어있는 맛집입니다.`);
          return { ...obj };
        } else {
          return { ...obj };
        }
      });
    });
  };
  return (
    <MenuWrapper onClick={() => toggleCartItem(id, name)}>
      <MenuIcon>
        <img src={`${whatKindOfThisFoodIs(category)}`} alt="Icon" />
      </MenuIcon>
      <MenuInfo>
        <MenuName>{name}</MenuName>
        <MenuCategory>{category}</MenuCategory>
      </MenuInfo>
      <CartCheckbox id={id} isChecked={isChecked} />
    </MenuWrapper>
  );
};

export default React.memo(EachMenu);
