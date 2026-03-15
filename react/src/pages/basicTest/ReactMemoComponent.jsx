import React from "react";

const ReactMemoComponent = ({ name }) => {
  console.log("react.memoTest!!!!!!!!", `${name("kong").me}님!!!!`);
  return <div>ReactMemoComponent!</div>;
};

export default React.memo(ReactMemoComponent);
