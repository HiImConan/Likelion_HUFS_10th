import styled from "styled-components";

export const MyListSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  gap: 0.9rem;
`;

export const Checkbox = styled.div`
  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ListIcon = styled.div`
  color: blue;

  & > img {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const ListName = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: 400;
`;

export const ListCategory = styled.div`
  padding: 0.3rem;
  font-size: 0.6rem;
  color: gray;
`;

export const Remove = styled.div`
  & > img {
    width: 1.7rem;
    height: 1.7rem;
  }
`;
