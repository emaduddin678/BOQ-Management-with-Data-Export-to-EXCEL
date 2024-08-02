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
        // console.log("Hello");
      })
      .catch((err) => console.log(err));
  };

  const singleBoqFieldUpdate = (value, fName, index) => {
    console.log(allBoq);

    setAllBoq((prevAllBoq) =>
      prevAllBoq.map((boq, i) =>
        i === index ? { ...boq, [fName]: value } : boq
      )
    );
  };

  const postThisData = (id, index, field) => {
    // console.log(id, index, field);
    // console.log(field, allBoq[index][field]);
    // console.log(allBoq[index]);

    const formData = new FormData();
    formData.append(field, allBoq[index][field]);
    console.log(field, allBoq[index][field]);
    console.log(allBoq[index][field] === null);
    // console.log(allBoq[index][field].includes("mm/dd/yyyy"));

    if (
      allBoq[index][field] === null ||
      allBoq[index][field] === "null" ||
      allBoq[index][field].includes("mm/dd/yyyy")
    ) {
      Swal.fire({
        position: "top-end",
        icon: "question",
        title: "Did You Enter Value??",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      axios
        .post(`boq/update/${id}`, formData)
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchBoq();
          }
        })
        .catch((err) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: err,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(err);
        });
    }
  };

  const handleDeleteBoq = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "btn btn-success focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ",
        cancelButton:
          "btn btn-danger focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/boq/delete/${id}`)
            .then((res) => {
              if (res.status === 200) {
                fetchBoq();
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "BOQ Project has been deleted.",
                  icon: "success",
                });
              }
            })
            .catch((err) => {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: err,
                icon: "error",
              });
              // console.log(err)
              throw err;
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "BOQ Project is safe :)",
            icon: "error",
          });
        }
      });
  };
  const value = {
    allBoq,
    fetchBoq,
    singleBoqFieldUpdate,
    postThisData,
    handleDeleteBoq,
  };
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
