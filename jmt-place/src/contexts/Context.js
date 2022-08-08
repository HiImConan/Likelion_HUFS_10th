import { createContext, useContext, useState, useMemo, useRef } from "react";

const CartValueContext = createContext();
const CartActionsContext = createContext();

export function Provider({ children }) {
  const [selected, setSelected] = useState([]);
  const [pageItems, setPageItems] = useState([]);
  const [pageList, setPageList] = useState([1]);
  const [nowPage, setNowPage] = useState(1);
  const idRef = useRef(1);

  const limit = 8;
  const calculatePages = (item) => {
    const pageLength = item.length > 0 ? item.length / limit : 1;
    const lastPage = Number.isInteger(pageLength)
      ? pageLength
      : Math.ceil(pageLength);
    setPageList([...Array(lastPage).keys()].map((ele) => ele + 1));
    console.log(`pageList: ${pageList}`);
  };

  const offset = (num) => (num - 1) * limit;

  const actions = useMemo(
    () => ({
      add(item) {
        const id = idRef.current;
        idRef.current += 1;
        setSelected((prev) => [...prev, { id, ...item }]);
        console.log("item");
        console.log(item);
        console.log("selected");
        console.log(selected);
        setPageItems(selected.slice(offset(nowPage), offset(nowPage) + limit));
        calculatePages(selected);
      },
      toggle(id) {
        setSelected((prev) =>
          prev.map((item) => {
            return item.id === id ? { ...item, done: !item.done } : item;
          })
        );
        console.log(selected);
      },
      remove(id) {
        setSelected((prev) => prev.filter((item) => item.id !== id));
      },
      loadPage(num) {
        setNowPage(num);
        setPageItems(selected.slice(offset(num), offset(num) + limit));
      },
    }),
    [nowPage, selected]
  );

  const value = useMemo(
    () => [pageItems, pageList, nowPage],
    [pageItems, pageList, nowPage]
  );

  return (
    <CartActionsContext.Provider value={actions}>
      <CartValueContext.Provider value={value}>
        {children}
      </CartValueContext.Provider>
    </CartActionsContext.Provider>
  );
}

export function useCartValue() {
  const context = useContext(CartValueContext);
  if (!context) {
    throw new Error("useCartValue should be used within Provider");
  }
  return context;
}

export function useCartActions() {
  const context = useContext(CartActionsContext);
  if (!context) {
    throw new Error("useCartActions should be used within Provider");
  }
  return context;
}
