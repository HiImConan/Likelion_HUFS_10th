import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import EachMenu from "./EachMenu";
import Loading from "./Loading";
import Data from "../assets/Data";
import Pagination from "./Pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const API_URL = "https://afd8cb3b-0077-4554-a7be-4ce86d83222c.mock.pstmn.io1";

const ShowMenuList = () => {
  const [loading, setLoading] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [menuPage, setMenuPage] = useState([]);
  const [pages, setPages] = useState([]);

  const { categoryID } = useParams();

  const getMenuList = useCallback(() => {
    const fetchMenus = async () => {
      setLoading(true);

      function sortOut(element) {
        const convertParamsToCategory = () => {
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
        const dataCategory = convertParamsToCategory(categoryID);
        console.log(`dataCategory:${dataCategory}`);
        if (element.category === dataCategory) {
          return true;
        }
      }

      try {
        const res = await axios.get(`${API_URL}/${categoryID}`);
        console.log(`response status: ${res.status}`);

        const lastPage = Math.ceil(res.data.length / 8);
        const pagesArr = [];
        for (let i = 1; i <= lastPage; i++) {
          pagesArr.push(i);
        }
        setPages(pagesArr); // update 'pages' state

        let dividedList = [];
        for (let i = 0; i < res.data.length; i += 8) {
          dividedList.push(res.data.slice(i, i + 8));
        }
        setMenuList(dividedList); // divide menuList by 8
        setLoading(false);
      } catch (error) {
        console.log(
          `error: ${error.response.status}, 로컬 데이터로 대체합니다.`
        );

        const res = categoryID !== "all" ? Data.filter(sortOut) : Data;
        const lastPage = Math.ceil(res.length / 8);
        const pagesArr = [];
        for (let i = 1; i <= lastPage; i++) {
          pagesArr.push(i);
        }
        setPages(pagesArr); // update 'pages' state

        let dividedList = [];
        for (let i = 0; i < res.length; i += 8) {
          dividedList.push(res.slice(i, i + 8));
        }
        setMenuList(dividedList); // divide menuList by 8
        setLoading(false);
      }
    };
    fetchMenus();
  }, [setLoading, setPages, setMenuList, categoryID]);

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
                />
              ))}
            </ul>
          ) : (
            <div>등록된 맛집이 없습니다.</div>
          )}
        </div>
      </div>

      <Pagination pages={pages} nowPage={nowPage} setNowPage={setNowPage} />
    </>
  );
};

export default ShowMenuList;
