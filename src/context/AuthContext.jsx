import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import getFormData from "../utility/getFormData";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState(!false);

  // const setCurrentUserTrue = () => {
  //   setCurrentUser(true);
  // };
  // const setCurrentUserFalse = () => {
  //   setCurrentUser(false);
  // };
  // console.log(localStorage.getItem("user"));
  useEffect(() => {
    // console.log(
    //   localStorage.getItem("user") === true,
    //   localStorage.getItem("user") === "true",
    //   typeof localStorage.getItem("user"),
    //   window.location.href === "http://localhost:5173",
    //   window.location.href === "localhost:5173",
    //   window.location.href
    // );
    if (localStorage.getItem("user") === true) {
      // console.log("AuthContext if");
      // setCurrentUser(true);
      localStorage.setItem("user", true);
    } else if (window.location.href === "http://localhost:5173/") {
      // console.log("AuthContext ielsef");
      localStorage.setItem("user", false);
      // setCurrentUser(false);
    }
  }, []);

  async function login(userInfo) {
    try {
      const response = await axios.post("/login", getFormData(userInfo));
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        localStorage.setItem("user", true);
        // setCurrentUser(true);
        return true;
      }
    } catch (error) {
      localStorage.setItem("user", false);
      console.log(error);
      return false;
    }
  }

  async function logout() {
    const response = await axios.post("/logout");

    console.log(response);
    if (response.data.status) {
      localStorage.setItem("user", false);
      localStorage.removeItem("token");
      return true;
    } else {
      localStorage.setItem("user", true);
      return false;
    }
    // .then(() => {
    //   localStorage.setItem("user", false);

    //   localStorage.removeItem("token");
    //   return true;
    //   // setCurrentUser(false);
    // })
    // .catch((err) => console.log(err));
  }

  const value = {
    // currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
