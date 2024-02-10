import React, { useEffect, useRef } from "react";

function FocousInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focous input element
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocousInput;
