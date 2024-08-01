import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const HistoryContext = createContext();

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};

const HistoryContextProvider = ({ children }) => {
  const [allBoq, setAllBoq] = useState([]);

  const fetchBoq = () => {
    axios
      .get("/boq/all-boq")
      .then((res) => {
        console.log(res);
        setAllBoq(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const value = { allBoq, fetchBoq };
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
