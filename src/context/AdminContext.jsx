import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import getFormData from "../utility/getFormData";

const AdminContext = createContext();

export function useAdminContext() {
  return useContext(AdminContext);
}

export default function AdminContextProvider({ children }) {
  const [allAdmin, setAllAdmin] = useState([]);
  const [prevAdminData, setPrevAdminData] = useState({
    name: "",
    department: "",
    phone_number: "",
    email: "",
    password: "",
  });

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

  const value = {
    allAdmin,
    fetchAdmin,
    prevAdminData,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
