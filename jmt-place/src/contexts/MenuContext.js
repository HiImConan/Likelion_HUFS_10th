import { createContext, useContext, useState, useMemo } from "react";

const MenuValueContext = createContext();
const MenuActionsContext = createContext();

export function MenuProvider({ children }) {
  const [menuList, setMenuList] = useState([]);
  const [pageList, setPageList] = useState([1]);
  const [nowPage, setNowPage] = useState(1);
  const limit = 8;

  const actions = useMemo(
    () => ({
      update(menuData) {
        const pageLength = menuData.length / limit;
        const lastPage = Number.isInteger(pageLength)
          ? pageLength
          : Math.ceil(pageLength);
        setPageList([...Array(lastPage).keys()].map((element) => element + 1));
        setMenuList(menuData);
      },
      loadPage(num) {
        const offset = (num - 1) * limit;
        setMenuList(menuList.slice(offset, offset + limit));
        setNowPage(num);
      },
    }),
    []
  );

  const value = useMemo(
    () => [menuList, pageList, nowPage],
    [menuList, pageList, nowPage]
  );

  return (
    <MenuActionsContext.Provider value={actions}>
      <MenuValueContext.Provider value={value}>
        {children}
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
