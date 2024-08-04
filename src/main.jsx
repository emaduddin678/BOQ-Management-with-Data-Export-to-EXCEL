import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { BrowserRouter, redirect } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ClientContextProvider from "./context/ClientContext.jsx";
import BoqContextProvider from "./context/BoqContext.jsx";
import { AllModalContext } from "./context/AllModalContext.jsx";
import HistoryContextProvider from "./context/HistoryContext.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";

// Create a client
const queryClient = new QueryClient();

// Set axios to a window property for easy access
window.axios = axios;
// Default headers for API calls
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// Base URL for your API calls
window.axios.defaults.baseURL = "https://boq.xri.com.bd/v1";
// If a token exists in local storage, set it in axios authorization header
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
// Intercept responses. If 401 error, clear token and redirect to login
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.log("helajflkdjfa;lsdjf;");
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.setItem("user", false);
      axios.defaults.headers.common["Authorization"] = "Bearer";
      // Redirect to login route
      return redirect("/");
    }
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AllModalContext>
        <HistoryContextProvider>
          <ClientContextProvider>
            <BoqContextProvider>
              <AdminContextProvider>
                <QueryClientProvider client={queryClient}>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </QueryClientProvider>
              </AdminContextProvider>
            </BoqContextProvider>
          </ClientContextProvider>
        </HistoryContextProvider>
      </AllModalContext>
    </AuthProvider>
  </React.StrictMode>
);
