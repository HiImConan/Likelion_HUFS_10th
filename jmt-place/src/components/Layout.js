import React from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

const Layout = () => {
  const categories = [
    {
      id: "전체",
      path: "all",
    },
    {
      id: "한식",
      path: "korean",
    },
    {
      id: "중식",
      path: "chinese",
    },
    {
      id: "일식",
      path: "japanese",
    },
    {
      id: "양식",
      path: "western",
    },
    {
      id: "카페",
      path: "cafe",
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
        <ul>
          {categories.map((category) => (
            <NavLink
              to={`/${category.path}`}
              key={category.id}
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: isActive ? "blue" : "",
                };
              }}
            >
              {category.id}
            </NavLink>
          ))}
        </ul>
      </header>
      <hr></hr>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
