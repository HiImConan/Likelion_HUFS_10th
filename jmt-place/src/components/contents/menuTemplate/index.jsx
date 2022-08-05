import React from "react";
import { MenuTemplateWrapper } from "./styled";
import { useMenuValue } from "../../../contexts/MenuContext";
import Menu from "../menu";

const MenuTemplate = () => {
  const { menuList } = useMenuValue();
  return (
    <MenuTemplateWrapper>
      {menuList.map((item) => {
        return <Menu key={item.id} name={item.name} category={item.category} />;
      })}
    </MenuTemplateWrapper>
  );
};

export default MenuTemplate;
