import { createContext, useContext, useState, useMemo } from "react";

const MenuValueContext = createContext();
const MenuActionsContext = createContext();
const PageValueContext = createContext();
const PageActionsContext = createContext();

export function MenuProvider({ children }) {
  const [menuData, setMenuData] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [pageList, setPageList] = useState([1]);
  const [nowPage, setNowPage] = useState(1);
  const limit = 8;
  const offset = (num) => (num - 1) * limit;

  const actions = useMemo(
    () => ({
      update(menuData) {
        setMenuData(menuData);
        setMenuList(menuData.slice(offset(nowPage), offset(nowPage) + limit));
        const pageLength = menuData.length / limit;
        const lastPage = Number.isInteger(pageLength)
          ? pageLength
          : Math.ceil(pageLength);
        setPageList([...Array(lastPage).keys()].map((element) => element + 1));
        setNowPage(1);
      },
      loadPage(num) {
        setNowPage(num);
        setMenuList(menuData.slice(offset(num), offset(num) + limit));
      },
    }),
    [nowPage]
  );

  const value = useMemo(() => [menuList, nowPage], [menuList, nowPage]);

  return (
    <MenuActionsContext.Provider value={actions.update}>
      <MenuValueContext.Provider value={value}>
        <PageActionsContext.Provider value={actions.loadPage}>
          <PageValueContext.Provider value={pageList}>
            {children}
          </PageValueContext.Provider>
        </PageActionsContext.Provider>
      </MenuValueContext.Provider>
    </MenuActionsContext.Provider>
  );
}

export function useMenuValue() {
  const context = useContext(MenuValueContext);
  if (!context) {
    throw new Error("useMenuValue should be used within MenuProvider");
  }
  return context;
}
export function useMenuActions() {
  const context = useContext(MenuActionsContext);
  if (!context) {
    throw new Error("useMenuActions should be used within MenuProvider");
  }
  return context;
}
export function usePageValue() {
  const context = useContext(PageValueContext);
  if (!context) {
    throw new Error("usePageValue should be used within MenuProvider");
  }
  return context;
}
export function usePageActions() {
  const context = useContext(PageActionsContext);
  if (!context) {
    throw new Error("usePageActions should be used within MenuProvider");
  }
  return context;
}
