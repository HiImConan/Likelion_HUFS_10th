import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowMenuList from "./ShowMenuList";
import All from "../routes/All";
import Korean from "../routes/Korean";
import Japanese from "../routes/Japanese";
import Chinese from "../routes/Chinese";
import Western from "../routes/Western";
import Cafe from "../routes/Cafe";
import Mypage from "../routes/Mypage";
import NotFound from "../routes/NotFound";
import Layout from "./Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<All />} />
        <Route path="/korean" element={<Korean />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/western" element={<Western />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/mypage" element={<Mypage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
