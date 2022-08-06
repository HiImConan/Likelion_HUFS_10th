import React from "react";
import { whatKindOfThisFoodIs } from "../../../assets/Image";
import { useCartActions } from "../../../contexts/Context";

import { MenuWrapper, MenuIcon, MenuName, MenuCategory } from "./styled";

const Menu = ({ id, name, category }) => {
  const actions = useCartActions();
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.add({
      name,
      category,
      done: false,
    });
    alert(`${name}이 추가되었습니다.`);
  };
  return (
    <MenuWrapper onClick={handleSubmit}>
      <MenuIcon>
        <img src={whatKindOfThisFoodIs(category)} alt={"img"} />
      </MenuIcon>
      <MenuName>{name}</MenuName>
      <MenuCategory>{category}</MenuCategory>
    </MenuWrapper>
  );
};

export default React.memo(Menu);
