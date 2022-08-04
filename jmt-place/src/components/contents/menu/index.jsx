import React from "react";
import whatKindOfThisFoodIs from "../../../assets/Image";
import useMenuActions from "../../../Context";

import { MenuWrapper, MenuIcon, MenuName, MenuCategory } from "./styled";

const Menu = ({ name, category }) => {
  const action = useMenuActions();
  const handleSubmit = (e) => {
    e.preventDefault();
    action.add({
      name,
      category,
      done: false,
    });
    alert(`${name}이 추가되었습니다.`);
  };
  return (
    <MenuWrapper onClick={handleSubmit}>
      <MenuIcon src={whatKindOfThisFoodIs(category)} />
      <MenuName>{name}</MenuName>
      <MenuCategory>{category}</MenuCategory>
    </MenuWrapper>
  );
};

export default React.memo(Menu);
