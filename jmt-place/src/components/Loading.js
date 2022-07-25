import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => {
  return (
    <div>
      <ReactLoading type={type} color={color} width={"2rem"} height={"2rem"} />
    </div>
  );
};

export default Loading;
