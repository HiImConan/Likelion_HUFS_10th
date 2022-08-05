import { createContext, useContext, useState, useMemo, useRef } from "react";

const CartValueContext = createContext();
const CartActionsContext = createContext();

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
    <CartActionsContext.Provider value={actions}>
      <CartValueContext.Provider value={selected}>
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
