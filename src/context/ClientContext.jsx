import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ClientContext = createContext();

export function useClientContext() {
  return useContext(ClientContext);
}

const ClientContextProvider = ({ children }) => {
  const [createClientModal, setCreateClientModal] = useState(false);
  const [clientData, setClientData] = useState([]);
  const [prevClientData, setPrevClientData] = useState({
    client_name: "",
    designation: "",
    department: "",
    circle: "",
    contact_number: "",
    email_id: "",
  });
  // console.log("🚀 ~ ClientContextProvider ~ prevClientData:", prevClientData);

  const fetchUsers = () => {
    try {
      axios
        .get("/client-user/all-user")
        .then((res) => {
          if (res.status === 200) {
            setClientData(res.data.data.data);
          }
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsersByName = (name) => {
    try {
      console.log(name);
      if (name === "") {
        fetchUsers();
      } else {
        axios
          .get(`/client-user/name/${name}`)
          .then((res) => setClientData(res.data.data))
          .catch((err) => {
            throw err;
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsersById = (id) => {
    console.log(id);
    try {
      if (id === "") {
        fetchUsers();
      } else {
        axios
          .get(`client-user/find/${id}`)
          .then((res) => {
            // console.log(res)
            if (res.data.status) {
              setClientData([res.data.data]);
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

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  // console.log(projectInfo);

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
            .delete(`/client-user/delete/${id}`)
            .then((res) => {
              if (res.status === 200) {
                fetchUsers();
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your client data has been deleted.",
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
            text: "Your client data is safe :)",
            icon: "error",
          });
        }
      });
  };

  // This is for client Pop up or modal page => start

  const handleOpenClient = () => {
    // console.log("this is calling from client management");
    setCreateClientModal(true);
    fetchUsers();
  };

  const handleOpenUpdateClient = (info) => {
    // console.log("🚀 ~ handleUpdateClient ~ info:", info);
    setPrevClientData(info);
    setCreateClientModal(true);
    // fetchUsers();
  };

  const handleCloseClient = () => {
    setPrevClientData({
      client_name: "",
      designation: "",
      department: "",
      circle: "",
      contact_number: "",
      email_id: "",
    });
    fetchUsers();
    setCreateClientModal(false);
  };

  // This is for client Pop up or modal page => end

  const value = {
    createClientModal,
    handleOpenClient,
    handleCloseClient,

    clientData,
    prevClientData,
    handleDelete,
    fetchUsers,
    fetchUsersByName,
    fetchUsersById,
    handleOpenUpdateClient,
  };
  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
};

export default ClientContextProvider;
