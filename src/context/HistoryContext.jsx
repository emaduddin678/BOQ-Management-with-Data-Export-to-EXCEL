import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import getFormData from "../utility/getFormData";
import Swal from "sweetalert2";

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
        setAllBoq(res.data.data);
        console.log("Hello");
      })
      .catch((err) => console.log(err));
  };

  const singleBoqFieldUpdate = (value, fName, index) => {
    console.log(allBoq)
    if(fName.includes("date")){
      if(value.includes("mm/dd/yyyy")){
        Swal.fire({
          position: "top-end",
          icon: "question",
          title: "Did you select date??",
          showConfirmButton: false,
          timer: 1500
        });

      }else{
        setAllBoq((prevAllBoq) =>
        prevAllBoq.map((boq, i) => (i === index ? { ...boq, [fName]: value } : boq))
      );
    }
    }else{
      setAllBoq((prevAllBoq) =>
      prevAllBoq.map((boq, i) => (i === index ? { ...boq, [fName]: value } : boq))
    );
  }
  };

  const postThisData = (id, index, field) => {
    // console.log(id, index, field);
    // console.log(field, allBoq[index][field]);
    // console.log(allBoq[index]);


    const formData = new FormData();
    formData.append(field, allBoq[index][field]);
    // console.log(field, allBoq[index][field]);

    axios
      .post(`boq/update/${id}`, formData)
      .then((res) => {
        console.log(res);
        if(res.data.status){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          fetchBoq();
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon:"error",
          title: err,
          showConfirmButton: false,
          timer: 1500
        });
        console.log(err)
      });
  };

  const value = { allBoq, fetchBoq, singleBoqFieldUpdate, postThisData };
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
