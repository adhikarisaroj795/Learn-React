import React from "react";

function MemoComp({ name }) {
  console.log("rendering memo comp");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
