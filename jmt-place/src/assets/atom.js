import { atom } from "recoil";

export const favItemState = atom({
  key: "favItemState",
  default: [],
});

export const menuItemListState = atom({
  key: "menuItemListState",
  default: [],
});
