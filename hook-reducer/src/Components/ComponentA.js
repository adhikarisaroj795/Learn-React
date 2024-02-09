import React, { useContext } from "react";
import { countContext } from "../App";
function ComponentA() {
  const { countState, countDispatch } = useContext(countContext);
  return (
    <div>
      ComponentA - {countContext.countState}
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentA;
