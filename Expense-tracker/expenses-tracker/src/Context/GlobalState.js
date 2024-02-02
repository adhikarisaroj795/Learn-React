import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//inital state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "camera", amount: 150 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ childeren }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {childeren}
    </GlobalContext.Provider>
  );
};