import React from "react";
import { MenuTemplateWrapper } from "./styled";
import Menu from "../menu";

const MenuTemplate = (menuData) => {
  return (
    <MenuTemplateWrapper>
      {menuData.map((item) => {
        <Menu name={item.name} category={item.category} />;
      })}
    </MenuTemplateWrapper>
  );
};

export default MenuTemplate;
