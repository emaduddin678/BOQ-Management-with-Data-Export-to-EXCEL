import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import getFormData from "../utility/getFormData";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);

  const setCurrentUserTrue = () => {
    setCurrentUser(true);
  };
  const setCurrentUserFalse = () => {
    setCurrentUser(false);
  };

  async function login(userInfo) {
    try {
      const response = await axios.post("/login", getFormData(userInfo));
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        setCurrentUser(true);
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function logout() {
    axios
      .post("/logout")
      .then(() => {
        localStorage.removeItem("token");
        setCurrentUser(false);
      })
      .catch((err) => console.log(err));
  }

  const value = {
    currentUser,
    login,
    logout,
    setCurrentUserTrue,
    setCurrentUserFalse,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
