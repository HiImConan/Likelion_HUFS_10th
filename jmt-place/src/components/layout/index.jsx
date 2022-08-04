import React from "react";
import { LayoutWrapper, Main } from "./styled";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};

export default Layout;
