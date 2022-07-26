import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import EachMenu from "./EachMenu";
import Loading from "./Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const API_URL = "https://72ed957c-6ff1-40d0-b1f8-8c268eaca41e.mock.pstmn.io";

const ShowMenuList = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [menuPage, setMenuPage] = useState([]);
  const [pages, setPages] = useState([]);

  const { id } = useParams();

  const getMenuList = useCallback(() => {
    const fetchMenus = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/${category}`);

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
        setLoading(false);
        console.log(`error: ${error}`);
        return <div>데이터를 불러오지 못했습니다.</div>;
      }
    };
    fetchMenus();
  }, [setLoading, setPages, setMenuList, category]);

  useEffect(getMenuList, []);

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
          ) : menuPage ? (
            <ul>
              {menuPage.map((menu) => (
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
        {pages.map((pageNum) => (
          <div key={pageNum} onClick={() => setNowPage(pageNum)}>
            {pageNum}
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowMenuList;
