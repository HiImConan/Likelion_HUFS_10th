import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/index";
import MenuTemplate from "../../contents/menuTemplate";
import { getCategoryApi } from "../../../assets/Api";
import Loading from "../../../assets/Loading";

const CategoryPage = () => {
  const { categoryID } = useParams();
  const [menuData, setMenuData] = useState();
  const [loading, setLoading] = useState(null);

  const getMenuList = async () => {
    try {
      const res = await getCategoryApi(categoryID);
      setMenuData(res);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMenuList();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      <MenuTemplate menuData />
    </Layout>
  );
};

export default CategoryPage;
