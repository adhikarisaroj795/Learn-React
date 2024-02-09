import logo from "./logo.svg";
import React, { useReducer } from "react";
import "./App.css";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
import ComponentA from "./Components/ComponentA";
import DataFerchingOne from "./Components/DataFerchingOne";
import DataFetchingTwo from "./Components/DataFetchingTwo";

export const countContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <countContext.Provider
    // value={{ countstate: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
      {/* <DataFerchingOne /> */}
      <DataFetchingTwo />
    </div>
    // </countContext.Provider>
  );
}

export default App;
