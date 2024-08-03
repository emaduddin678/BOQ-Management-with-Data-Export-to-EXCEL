import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import getFormData from "../utility/getFormData";

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
            console.log(res.data.data);
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

  const value = {
    allAdmin,
    fetchAdmin,
    openAdmin,
    prevAdminData,
    handleOpenAdmin,
    handleUpdateAdmin,
    handleCloseAdmin,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
