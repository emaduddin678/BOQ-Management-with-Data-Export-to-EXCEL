import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import getFormData from "../utility/getFormData";
import Swal from "sweetalert2";

const AdminContext = createContext();

export function useAdminContext() {
  return useContext(AdminContext);
}

export default function AdminContextProvider({ children }) {
  const [allAdmin, setAllAdmin] = useState([]);
  const [openAdmin, setOpenAdmin] = useState(false);

  const [prevAdminData, setPrevAdminData] = useState({
    name: "",
    department: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const handleOpenAdmin = () => {
    setOpenAdmin(true);
    console.log("hello");
  };

  const handleCloseAdmin = () => {
    setOpenAdmin(false);
  };

  const fetchAdmin = () => {
    try {
      axios
        .get("/admin/all-user")
        .then((res) => {
          if (res.status === 200) {
            // console.log(res.data.data);
            setAllAdmin(res.data.data);
          }
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateAdmin = (info) => {
    console.log("🚀 ~ handleUpdateClient ~ info:", info);
    setPrevAdminData((prev) => ({ ...prev, ...info }));
    handleOpenAdmin();
    // fetchUsers();
  };

  const handleDelete = (id) => {
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
            .delete(`/admin/delete/${id}`)
            .then((res) => {
              if (res.status === 200) {
                fetchAdmin();
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your admin data has been deleted.",
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
            text: "Your admin data is safe :)",
            icon: "error",
          });
        }
      });
  };


  
  const fetchAdminByName = (name) => {
    try {
      // console.log(name);
      if (name === "") {
        fetchAdmin();
      } else {
        axios
          .get(`/admin/name/${name}`)
          .then((res) => setAllAdmin(res.data.data))
          .catch((err) => {
            throw err;
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAdminById = (id) => {
    console.log(id);
    try {
      if (id === "") {
        fetchAdmin();
      } else {
        axios
          .get(`/admin/find/${id}`)
          .then((res) => {
            // console.log(res)
            if (res.data.status) {
              setAllAdmin([res.data.data]);
            }
          })
          .catch((err) => {
            throw err;
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    allAdmin,
    fetchAdmin,
    openAdmin,
    prevAdminData,
    handleOpenAdmin,
    handleUpdateAdmin,
    handleCloseAdmin,
    handleDelete,
    fetchAdminByName,
    fetchAdminById
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
