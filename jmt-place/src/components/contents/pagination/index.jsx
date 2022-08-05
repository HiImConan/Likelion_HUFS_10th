import { PageNumSection, ArrowButton, PageNumDiv } from "./styled";
import { useMenuActions, useMenuValue } from "../../../contexts/MenuContext";

const Pagination = () => {
  const { pageList, nowPage } = useMenuValue();
  const { loadPage } = useMenuActions();
  console.log(pageList, nowPage);
  return (
    <PageNumSection>
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
    </PageNumSection>
  );
};

export default Pagination;
