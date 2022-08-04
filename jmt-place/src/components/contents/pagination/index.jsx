import { PageNumSection, ArrowButton, PageNumDiv } from "./styled";

const Pagination = ({ menuLength, nowPage, setNowPage }) => {
  const limit = 8;
  const pageLength = menuLength / limit;
  const lastPage = Number.isInteger(pageLength)
    ? pageLength
    : Math.ceil(pageLength);
  const pages = [...Array(lastPage).keys()].map((element) => element + 1);

  return (
    <PageNumSection>
      <ArrowButton
        onClick={() => setNowPage(nowPage - 1)}
        disabled={nowPage === 1}
      >
        &lt;
      </ArrowButton>
      {pages.map((pageNum) => (
        <PageNumDiv
          key={pageNum}
          onClick={() => setNowPage(pageNum)}
          style={{ color: pageNum === nowPage ? "#2C4172" : "#AABACD" }}
        >
          {pageNum}
        </PageNumDiv>
      ))}
      <ArrowButton
        onClick={() => setNowPage(nowPage + 1)}
        disabled={nowPage === lastPage}
      >
        &gt;
      </ArrowButton>
    </PageNumSection>
  );
};

export default Pagination;
