import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import getFormData from "../utility/getFormData";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// const user = useAuth();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  // const [createClientModal, setCreateClientModal] = useState(false);


  // login function
  async function login(userInfo) {
    try {
      const response = await axios.post("/login", getFormData(userInfo));
      if (response.status === 200) {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

        setCurrentUser(true)
        return true;
      }
    } catch (error) {
      console.log(error);
      if (error) {
        return false;
      }
      // Handle other errors as needed
      // return false; // or some other indication of an error
    }
  }

  //logout function
  function logout() {
    setCurrentUser(false);
    axios
      .post("/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
