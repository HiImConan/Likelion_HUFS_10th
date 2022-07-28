import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowMenuList from "./ShowMenuList";
import Mypage from "../routes/Mypage";
import NotFound from "../routes/NotFound";
import Layout from "./Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:categoryID" element={<ShowMenuList />} />
        <Route path="/mypage" element={<Mypage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
