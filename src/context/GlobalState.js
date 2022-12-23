import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

const storedTransactions = localStorage.getItem("transactions");
console.log(storedTransactions, "here");

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

console.log(initialState.transactions);

// Create Context
export const GlobalContext = createContext(initialState);

// Context Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
