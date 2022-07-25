import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import EachMenu from "./EachMenu";
import Loading from "../components/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const ShowMenuList = () => {
  const [loading, setLoading] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [isFinalPage, setIsFinalPage] = useState();
  const [isFirstPage, setIsFirstPage] = useState();

  const getMenuList = useCallback(() => {
    setLoading(true);
    axios
      .get("https://a02a6001-2421-4884-bdf5-0253413f4bb8.mock.pstmn.io/all")
      .then((response) => {
        const lastPage = Math.ceil(response.data.count / 8);
        const pagesArr = [];
        for (let i = 1; i <= lastPage; i++) {
          pagesArr.push(i);
        }
        setPages(pagesArr); // update pages state

        setMenuList(response.data.results);
        setLoading(false);

        // 뒤로 가기 / 앞으로 가기 버튼 위한 상태 관리
        setIsFinalPage(response.data.next);
        setIsFirstPage(response.data.previous);
      });
  }, [setLoading, setPages, setMenuList, setIsFinalPage, setIsFirstPage]);

  // 사용자가 선택하는 페이지가 달라질 때마다 바뀌게 함
  useEffect(getMenuList, [nowPage]);

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
          ) : menuList.length === 0 ? (
            <div>등록된 맛집이 없습니다.</div>
          ) : (
            <ul>
              {menuList.map((menu) => (
                <EachMenu key={menu.id} title={menu.title} postID={menu.id} />
              ))}
            </ul>
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
