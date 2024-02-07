import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./Components/ComponentC";
import React from "react";
import Counterone from "./Components/Counterone";
import CounterTwo from "./Components/CounterTwo";
import CounterThree from "./Components/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <CounterThree />
      {/* <CounterTwo /> */}
      {/* <UserContext.Provider value={"saroj"}>
        <ChannelContext.Provider value={"codeEvolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
