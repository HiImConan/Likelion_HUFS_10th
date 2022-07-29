import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import { LayoutWrapper, Header, NavUl, Main } from "../styles/LayoutStyles";

const Layout = () => {
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

  return (
    <LayoutWrapper>
      <Header>
        <NavUl>
          {MENU_CATEGORY_LIST.map((element) => (
            <NavLink
              to={`/${element.path}`}
              key={element.id}
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  margin: "1rem",
                  color: isActive ? "" : "#2C4172",
                  fontSize: isActive ? "600" : "",
                };
              }}
            >
              {element.id}
            </NavLink>
          ))}
        </NavUl>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;
