import React, { createContext, useContext } from "react";

const historyContextProvider = createContext();

export const useHistoryContext = () => {
  useContext(historyContextProvider);
};

const HistoryContext = ({ children }) => {
  const value = { a: 5 };
  return (
    <historyContextProvider.Provider value={value}>
      {children}
    </historyContextProvider.Provider>
  );
};

export default HistoryContext;
