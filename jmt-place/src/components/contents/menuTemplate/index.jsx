import React, { useEffect } from "react";
import { MenuTemplateSection } from "./styled";
import { useMenuValue, usePageActions } from "../../../contexts/MenuContext";
import Menu from "../menu";

const MenuTemplate = () => {
  const [menuList, nowPage] = useMenuValue(); // 이 상태에서는 pagination이 안된 상태의 menuList임.
  const loadPage = usePageActions();
  useEffect(() => loadPage(nowPage), [nowPage]);
  return (
    <MenuTemplateSection>
      {menuList.map((item) => {
        return <Menu key={item.id} name={item.name} category={item.category} />;
      })}
    </MenuTemplateSection>
  );
};

export default MenuTemplate;
