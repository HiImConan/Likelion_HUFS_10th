import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowMenuList from "../models/ShowMenuList";
import Mypage from "./Mypage";
import NotFound from "./NotFound";
import Layout from "../components/Layout";

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
