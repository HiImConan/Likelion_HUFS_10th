import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import { menuItemListState } from "../assets/atom";

import EachMenu from "./EachMenu";
import Loading from "../components/Loading";
import DUMMY_DATA from "../assets/Data";
import Pagination from "../components/Pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const API_URL = "https://afd8cb3b-0077-4554-a7be-4ce86d83222c.mock.pstmn.io1";

const convertParamsToCategory = (categoryID) => {
  switch (categoryID) {
    case "all":
      return "";
    case "kr":
      return "한식";
    case "cn":
      return "중식";
    case "jp":
      return "일식";
    case "west":
      return "양식";
    case "coffee":
      return "카페";
    default:
      return "all";
  }
};

const ShowMenuList = () => {
  const [loading, setLoading] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [menuPage, setMenuPage] = useState([]);
  const [menuLength, setMenuLength] = useState(0);
  const setMenuItemList = useSetRecoilState(menuItemListState);

  const { categoryID } = useParams();

  const menuListHandler = (res) => {
    const menuArr =
      "isChecked" in res
        ? res
        : res.map((obj) => {
            return { ...obj, isChecked: false };
          });
    setMenuItemList(menuArr);
    let dividedList = [];
    for (let i = 0; i < menuArr.length; i += 8) {
      dividedList.push(menuArr.slice(i, i + 8));
    }
    setMenuList(dividedList); // divide menuList by 8
    return menuArr;
  };

  const getMenuList = useCallback(() => {
    const fetchMenu = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`${API_URL}/${categoryID}`);
        console.log(`response status: ${res.status}`);

        menuListHandler(res.data);

        setMenuLength(res.data.length);

        setLoading(false);
      } catch (error) {
        console.log(
          `error: ${error.response.status}, 로컬 데이터로 대체합니다.`
        );

        const res =
          categoryID !== "all"
            ? DUMMY_DATA.filter(
                (data) => data.category === convertParamsToCategory(categoryID)
              )
            : DUMMY_DATA;

        menuListHandler(res);

        setMenuLength(res.length);

        setLoading(false);
      }
    };
    fetchMenu();
  }, [setLoading, setMenuLength, categoryID]);

  useEffect(getMenuList, [categoryID, getMenuList]);

  // re-render menu page when nowPage changed
  useEffect(() => {
    const nowIdx = nowPage - 1;
    setMenuPage(menuList[nowIdx]);
  }, [nowPage, menuList]);

  return (
    <>
      <div>
        <div>
          <FontAwesomeIcon onClick={getMenuList} icon={faArrowsRotate} />
        </div>
        <div>
          {loading ? (
            <div>
              <Loading type="spokes" color="blue" />
            </div>
          ) : menuPage && menuPage ? (
            <ul>
              {menuPage.map((menu) => (
                <EachMenu
                  key={menu.id}
                  id={menu.id}
                  name={menu.name}
                  category={menu.category}
                  isChecked={menu.isChecked}
                />
              ))}
            </ul>
          ) : (
            <div>등록된 맛집이 없습니다.</div>
          )}
        </div>
      </div>

      <Pagination
        menuLength={menuLength}
        nowPage={nowPage}
        setNowPage={setNowPage}
      />
    </>
  );
};

export default ShowMenuList;