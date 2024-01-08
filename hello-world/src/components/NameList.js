import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["saroj", "rahul", "bipin", "saroj"];
  const persons = [
    {
      id: 1,
      name: "saroj",
      age: 24,
      skill: "react",
    },
    {
      id: 2,
      name: "niraj",
      age: 20,
      skill: "angular",
    },
    {
      id: 3,
      name: "dhiraj",
      age: 18,
      skill: "javaScript",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));

  return <div>{nameList}</div>;
}

export default NameList;
