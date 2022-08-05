import { createContext, useContext, useState, useMemo, useRef } from "react";

const MenuValueContext = createContext();
const MenuActionsContext = createContext();

export function Provider({ children }) {
  const [selected, setSelected] = useState([]);
  const idRef = useRef(1);
  const actions = useMemo(
    () => ({
      add(item) {
        const id = idRef.current;
        idRef.current += 1;
        setSelected((prev) => [...prev, { id, ...item }]);
      },
      toggle(id) {
        setSelected((prev) =>
          prev.map((item) => {
            return item.id === id ? { ...item, done: !item.done } : item;
          })
        );
      },
      remove(id) {
        setSelected((prev) => prev.filter((item) => item.id !== id));
      },
    }),
    []
  );

  return (
    <MenuActionsContext.Provider value={actions}>
      <MenuValueContext.Provider value={selected}>
        {children}
      </MenuValueContext.Provider>
    </MenuActionsContext.Provider>
  );
}

export function useMenuValue() {
  const context = useContext(MenuValueContext);
  if (!context) {
    throw new Error("useMenuValue should be used within TodosProvider");
  }
  return context;
}

export function useMenuActions() {
  const context = useContext(MenuActionsContext);
  if (!context) {
    throw new Error("useMenuActions should be used within TodosProvider");
  }
  return context;
}
