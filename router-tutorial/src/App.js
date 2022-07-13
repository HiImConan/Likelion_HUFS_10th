import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
// <Switch>
//  <Route path="" exact>
//    <Children />
//  </Route >
// </Switch>

// exact props가 사라진 배경: '/'랑 '/about'란 경로가 있을 때, v5에선 exact 속성을 부여해주지 않으면 둘 다 매칭시켜 보여줬음.
// v6로 넘어오면서 매칭 규칙이 기본적으로 정확히 일치하게 변하여 exact 기능이 default값이 됨. 만약 한꺼번에 유사한 하위 경로들을 보여주고 싶다면 *wildcard를 붙이면 유동적으로 변함.
export default App;
