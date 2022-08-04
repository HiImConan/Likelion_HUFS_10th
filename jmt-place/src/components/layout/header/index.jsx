import React from "react";
import { Header, NavUl, NavLink } from "./styled";

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
    <Header>
      <NavUl>
        {MENU_CATEGORY_LIST.map((element) => (
          <NavLink to={`/${element.path}`} key={element.id}>
            {element.id}
          </NavLink>
        ))}
      </NavUl>
    </Header>
  );
};

export default Header;
