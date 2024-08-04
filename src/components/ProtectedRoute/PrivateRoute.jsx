import { useEffect } from "react";
import { useAuth } from "./../../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  
  console.log(localStorage.getItem("user"));


  if (localStorage.getItem("user")) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
