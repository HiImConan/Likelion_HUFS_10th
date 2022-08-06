import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategoryApi } from "../../../assets/Api";
import { useMenuActions } from "../../../contexts/MenuContext";
import Layout from "../../layout/index";
import Pagination from "../../contents/pagination";
import Loading from "../../../assets/Loading";
import MenuTemplate from "../../contents/menuTemplate";
import { CategoryPageSection } from "./styled";

const CategoryPage = () => {
  const { categoryID } = useParams();
  const update = useMenuActions();
  const [loading, setLoading] = useState(null);

  const getMenuList = async () => {
    try {
      const res = await getCategoryApi(categoryID);
      update(res);
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
  }, [categoryID]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <CategoryPageSection>
          <MenuTemplate />
          <Pagination />
        </CategoryPageSection>
      )}
    </Layout>
  );
};

export default CategoryPage;
