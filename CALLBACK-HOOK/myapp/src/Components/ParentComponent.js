import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementAge}>Increment Age</Button>
    </div>
  );
}

export default ParentComponent;
