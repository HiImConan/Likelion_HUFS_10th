import React from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Layout = () => {
  const categories = [
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

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header>
        <button onClick={goBack}>⬅️</button>
        <NavUl>
          {categories.map((element) => (
            <NavLink
              to={`/${element.path}`}
              key={element.id}
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  margin: "1rem",
                  color: isActive ? "blue" : "",
                };
              }}
            >
              {element.id}
            </NavLink>
          ))}
        </NavUl>
      </header>
      <hr></hr>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
