import React, { useEffect } from "react";
import { whatKindOfThisFoodIs, Image } from "../../../assets/Image";
import {
  MyListSection,
  ListWrapper,
  Checkbox,
  ListIcon,
  ListName,
  ListCategory,
  Remove,
} from "./styled";

const MyList = ({ pageItems, actions }) => {
  const handleToggle = (id) => {
    console.log(`id: ${id}`);
    actions.toggle(id);
  };
  const handleRemove = (id) => {
    actions.remove(id);
    alert("삭제되었습니다.");
  };

  return (
    <MyListSection>
      {pageItems ? (
        pageItems.map((item) => (
          <ListWrapper key={item.id}>
            <Checkbox onClick={() => handleToggle(item.id)}>
              {item.done ? (
                <img src={Image.checkbox} alt="" />
              ) : (
                <img src={Image.emptybox} alt="" />
              )}
            </Checkbox>
            <ListIcon>
              <img src={whatKindOfThisFoodIs(item.category)} alt={"img"} />
            </ListIcon>
            <div>
              <ListName>{item.name}</ListName>
              <ListCategory>{item.category}</ListCategory>
            </div>
            <Remove onClick={() => handleRemove(item.id)}>
              <img src={Image.trashcan} alt="" />
            </Remove>
          </ListWrapper>
        ))
      ) : (
        <div>아직 추가된 메뉴가 없습니다.</div>
      )}
    </MyListSection>
  );
};

export default MyList;
