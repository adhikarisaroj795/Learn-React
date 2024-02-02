import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, SetCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      SetCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      count: {count}
      <button onClick={() => SetCount(initialCount)}>Reset</button>
      <button onClick={() => SetCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => SetCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment5</button>
    </div>
  );
}

export default HookCounterTwo;
