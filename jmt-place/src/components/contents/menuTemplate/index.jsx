import React from "react";
import { MenuTemplateWrapper } from "./styled";
import Menu from "../menu";

const MenuTemplate = ({ menuData }) => {
  console.log(menuData);
  return (
    <MenuTemplateWrapper>
      {menuData.map((item) => {
        return <Menu key={item.id} name={item.name} category={item.category} />;
      })}
    </MenuTemplateWrapper>
  );
};

export default MenuTemplate;
