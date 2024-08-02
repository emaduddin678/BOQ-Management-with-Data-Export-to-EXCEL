import { useEffect } from "react";
import { useAuth } from "./../../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, setCurrentUserTrue, setCurrentUserFalse } = useAuth();
  console.log(currentUser);

  useEffect(() => {
    console.log("Hello Emad");
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/client-user/all-user") // Endpoint to validate token
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setCurrentUserTrue();
          } else {
            localStorage.removeItem("token");
            setCurrentUserFalse();
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          setCurrentUserFalse();
        });
    }
  }, []);

  if (currentUser) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
