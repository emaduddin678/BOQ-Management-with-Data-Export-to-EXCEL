import { useEffect, useState } from "react";
import "./App.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import DataGridPage from "./DataGridPage/DataPage";
// import ExportToExcel from "./ExcelSheet/ExcelFile";
import Test from "./components/ExcelSheet/ExcelFile";
import DashBoard from "./pages/dashboard/DashBoard";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Login from "./pages/loginPage/Login";
import HistoryPage from "./pages/historyPage/HistoryPage";
import SearchInput from "./components/SearchInput/SearchInput";
import ErrorPage from "./pages/error/ErrorPage";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import ClientManagement from "./components/clientManagement/ClientManagement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route
              path="client-user"
              element={
                // <PrivateRoute>

                <ClientManagement />
                // </PrivateRoute>
              }
            />
            <Route
              path="createboq"
              element={
                // <PrivateRoute>
                <SearchInput />
                // </PrivateRoute>
              }
            />
            <Route
              path="history"
              element={
                // <PrivateRoute>
                <HistoryPage />
                // </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
