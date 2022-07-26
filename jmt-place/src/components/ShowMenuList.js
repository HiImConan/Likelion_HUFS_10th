import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import EachMenu from "./EachMenu";
import Loading from "./Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const API_URL = "https://72ed957c-6ff1-40d0-b1f8-8c268eaca41e.mock.pstmn.io";

const ShowMenuList = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [isFinalPage, setIsFinalPage] = useState();
  const [isFirstPage, setIsFirstPage] = useState();

  console.log(menuList);

  const getMenuList = useCallback(() => {
    setLoading(true);
    axios.get(`${API_URL}/${category}`).then((response) => {
      console.log(response);
      const lastPage = Math.ceil(response.data.length / 8);
      const pagesArr = [];
      for (let i = 1; i <= lastPage; i++) {
        pagesArr.push(i);
      }
      setPages(pagesArr); // update pages state

      let dividedList = [];
      console.log(response.data.length);
      setMenuList(response.data);
      setLoading(false);
    });
  }, [setLoading, setPages, setMenuList]);

  // 사용자가 선택하는 페이지가 달라질 때마다 바뀌게 함
  useEffect(getMenuList, []);

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
          ) : menuList ? (
            <ul>
              {menuList.map((menu) => (
                <EachMenu
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

      <div>
        {isFirstPage ? (
          <div
            onClick={() => {
              if (nowPage > 1) setNowPage(nowPage - 1);
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        ) : (
          ""
        )}

        {pages.map((pageNum) => (
          <div key={pageNum} onClick={() => setNowPage(pageNum)}>
            {pageNum}
          </div>
        ))}

        {isFinalPage ? (
          <div
            onClick={() => {
              if (pages.length > nowPage) setNowPage(nowPage + 1);
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ShowMenuList;
