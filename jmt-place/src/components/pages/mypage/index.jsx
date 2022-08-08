import React from "react";
import Layout from "../../layout";
import MyList from "../../contents/MyList/index";
import Pagination from "../../contents/pagination";
import { MypageSection } from "./styled";
import { useCartValue, useCartActions } from "../../../contexts/Context";

const Mypage = () => {
  const [pageItems, pageList, nowPage] = useCartValue();
  const actions = useCartActions();
  console.log(pageItems, pageList, nowPage);
  return (
    <Layout>
      <MypageSection>
        <MyList pageItems={pageItems} nowPage={nowPage} actions={actions} />
        <Pagination
          nowPage={nowPage}
          pageList={pageList}
          loadPage={actions.loadPage}
        />
      </MypageSection>
    </Layout>
  );
};

export default Mypage;
