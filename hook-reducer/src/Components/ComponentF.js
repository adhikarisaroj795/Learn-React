import React, { useContext } from "react";
import { countContext } from "../App";

function ComponentF() {
  const { countState, countDispatch } = useContext(countContext);
  return (
    <div>
      ComponentF
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentF;
