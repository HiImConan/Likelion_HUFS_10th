import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingDiv = styled.div`
  justify-content: center;
  align-items: center;
`;

const Loading = ({ type, color }) => {
  return (
    <LoadingDiv>
      <ReactLoading type={type} color={color} width={"5rem"} height={"5rem"} />
    </LoadingDiv>
  );
};

export default Loading;
