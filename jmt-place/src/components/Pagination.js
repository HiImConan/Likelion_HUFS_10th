import styled, { css } from "styled-components";

const PageNumSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageNumDiv = styled.div`
  margin: 0.5rem;
  &.isActive {
    color: blue;
  }
`;
const ArrowButton = styled.button`
  ${(props) =>
    props.disabled
      ? css`
          display: none;
        `
      : css`
          cursor: pointer;
        `};
`;

const Pagination = ({ pages, nowPage, setNowPage }) => {
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
          style={{ color: pageNum === nowPage && "blue" }}
        >
          {pageNum}
        </PageNumDiv>
      ))}
      <ArrowButton
        onClick={() => setNowPage(nowPage + 1)}
        disabled={nowPage === pages.at(-1)}
      >
        &gt;
      </ArrowButton>
    </PageNumSection>
  );
};

export default Pagination;
