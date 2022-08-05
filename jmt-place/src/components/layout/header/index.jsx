import React from "react";
import { HeaderSection, NavUl, NavLi } from "./styled";

const MENU_CATEGORY_LIST = [
  {
    id: "전체",
    path: "all",
  },
  {
    id: "한식",
    path: "kr",
  },
  {
    id: "중식",
    path: "cn",
  },
  {
    id: "일식",
    path: "jp",
  },
  {
    id: "양식",
    path: "west",
  },
  {
    id: "카페",
    path: "coffee",
  },
  {
    id: "마이페이지",
    path: "mypage",
  },
];

const Header = () => {
  return (
    <HeaderSection>
      <NavUl>
        {MENU_CATEGORY_LIST.map((element) => (
          <NavLi to={`/${element.path}`} key={element.id}>
            {element.id}
          </NavLi>
        ))}
      </NavUl>
    </HeaderSection>
  );
};

export default Header;
