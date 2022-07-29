import React from "react";

import Image from "../assets/Image";

import { useRecoilState } from "recoil";
import { favItemState } from "../assets/atom";

import {
  MenuWrapper,
  MenuIcon,
  MenuInfo,
  MenuName,
  MenuCategory,
  ButtonDiv,
  TrashcanImg,
  CheckboxImg,
  CheckboxEmptyImg,
} from "../styles/MenuStyles";

function whatKindOfThisFoodIs(category) {
  switch (category) {
    case "한식":
      return Image.kr;
    case "중식":
      return Image.cn;
    case "일식":
      return Image.jp;
    case "양식":
      return Image.west;
    case "카페":
      return Image.coffee;
    default:
      return Image.def;
  }
}
const EachMenu = ({ id, name, category, isMyPage }) => {
  const [favItems, setFavItems] = useRecoilState(favItemState);

  const handleFavItems = (id, name, category) => {
    setFavItems(() => {
      const prevState = [...favItems];
      const favIdx = prevState.findIndex((fav) => fav.id === id);
      let result;

      if (favIdx === -1) {
        result = [...prevState, { id, name, category }];
        localStorage.setItem("favs", JSON.stringify(result));
        alert(`${name}이(가) 찜 목록에 추가되었습니다!`);
      } else {
        prevState.splice(favIdx, 1);
        result = prevState;
        localStorage.setItem("favs", JSON.stringify(result));
        alert(`${name}이(가) 찜 목록에서 삭제되었습니다.`);
      }
      return result;
    });
  };
  return (
    <MenuWrapper onClick={() => handleFavItems(id, name, category)}>
      <MenuIcon>
        <img src={`${whatKindOfThisFoodIs(category)}`} alt="Icon" />
      </MenuIcon>
      <MenuInfo>
        <MenuName>{name}</MenuName>
        <MenuCategory>{category}</MenuCategory>
      </MenuInfo>
      <ButtonDiv>{isMyPage ? <TrashcanImg /> : <CheckboxImg />}</ButtonDiv>
    </MenuWrapper>
  );
};

export default React.memo(EachMenu);
