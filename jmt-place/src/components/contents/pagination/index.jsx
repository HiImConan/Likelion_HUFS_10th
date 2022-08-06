import { PaginationSection, ArrowButton, PageNumDiv } from "./styled";
import {
  usePageActions,
  usePageValue,
  useMenuValue,
} from "../../../contexts/MenuContext";

const Pagination = () => {
  const [, nowPage] = useMenuValue();
  const pageList = usePageValue();
  const loadPage = usePageActions();
  console.log(nowPage);
  console.log(pageList);
  return (
    <PaginationSection>
      <ArrowButton
        onClick={() => loadPage(nowPage - 1)}
        disabled={nowPage === 1}
      >
        ⬅️
      </ArrowButton>
      {pageList.map((num) => (
        <PageNumDiv
          key={num}
          onClick={() => loadPage(num)}
          style={{ color: num === nowPage ? "#2C4172" : "#AABACD" }}
        >
          {num}
        </PageNumDiv>
      ))}
      <ArrowButton
        onClick={() => loadPage(nowPage + 1)}
        disabled={nowPage === pageList.length}
      >
        ➡️
      </ArrowButton>
    </PaginationSection>
  );
};

export default Pagination;
