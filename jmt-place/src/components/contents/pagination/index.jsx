import { PaginationSection, ArrowButton, PageNumDiv } from "./styled";

const Pagination = ({ nowPage, pageList, loadPage }) => {
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
