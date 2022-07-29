import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const menuItemListState = atom({
  key: "menuItemListState",
  default: [],
});

export const cartItemSelector = selector({
  key: "cartItemSelector",
  get: ({ get }) => {
    const stateMenuItems = get(menuItemListState);
    return [stateMenuItems.filter((stateMenuItem) => stateMenuItem.isChecked)];
  },
});
