import React from "react";
import { whatKindOfThisFoodIs } from "../../../assets/Image";
import { useCartActions } from "../../../contexts/Context";

import { MenuWrapper, MenuIcon, MenuName, MenuCategory } from "./styled";

const Menu = ({ name, category }) => {
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
      <div>
        <MenuName>{name}</MenuName>
        <MenuCategory>{category}</MenuCategory>
      </div>
    </MenuWrapper>
  );
};

export default React.memo(Menu);
