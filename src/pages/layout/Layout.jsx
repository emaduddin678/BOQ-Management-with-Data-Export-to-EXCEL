import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CreateBoqPopUp from "../../components/createBoqPopUp/CreateBoqPopUp";
import ClientManagement from "../../components/clientManagement/ClientManagement";
import CreateClientPopUp from "../../components/createClientPopUp/CreatClientPopUp";
import { useClientContext } from "../../context/ClientContext";
import { useAuth } from "../../context/AuthContext";
import HistoryPage from "../historyPage/HistoryPage";
import { useBoqContext } from "../../context/BoqContext";
import formateDate from "../../utility/getFormattedDate";
import { useAllModalContext } from "../../context/AllModalContext";

const Layout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { createBoqModal, handleBoqPopup, handleCloseBOQ } =
    useAllModalContext();
  console.log("🚀 ~ Layout ~ createBoqModal:", createBoqModal);

  const { createClientModal, handleOpenClient, handleCloseClient, fetchUsers } =
    useClientContext();
  const { allBoq, fetchBoq, createBoqIsDisabled, boqDisable } = useBoqContext();
  // console.log(allBoq);

  const [clientManagementShow, setClientManagementShow] = useState(false);
  const [historyShow, setHistoryShow] = useState(false);

  useEffect(() => {
    // Set initial mode based on localStorage
    const mode = localStorage.getItem("mode") || "light";
    if (mode === "dark") {
      document.body.classList.add("dark");
    }
    fetchUsers();
    fetchBoq();
    // const getStatus = localStorage.getItem("status") || "close";
    // if (getStatus === "close") {
    //   document.getElementById("navId").classList.toggle("close");
    // }
  }, []);
  useEffect(() => {
    boqDisable();
  }, []);

  const handleModeToggle = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  };
  const handleSidebarToggle = () => {
    document.getElementById("navId").classList.toggle("close");
    if (document.getElementById("navId").classList.contains("close")) {
      localStorage.setItem("status", "close");
    } else {
      localStorage.setItem("status", "open");
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`${
        (createBoqModal || createClientModal) &&
        "relative h-screen overflow-hidden"
      }`}
    >
      {createBoqModal && <CreateBoqPopUp handleCloseBOQ={handleCloseBOQ} />}
      {createClientModal && (
        <CreateClientPopUp
          handleCloseClient={handleCloseClient}
          handleOpenClient={handleOpenClient}
        />
      )}
      <nav id="navId">
        <div className="logo-name">
          <div className="logo-image">
            <img src="/brand-logo.png" alt="" />
          </div>
          <span className="logo_name">ASIATIC EXP</span>
        </div>
        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/dashboard")}
              >
                <svg
                  width="24"
                  fill="#707070"
                  data-name="Livello 1"
                  id="Livello_1"
                  strokeWidth="2"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z" />
                </svg>
                <button className="link-name">Dashboard</button>
              </div>
            </li>
            <li>
              <button
                style={{ cursor: "pointer" }}
                onClick={handleBoqPopup}
                disabled={createBoqIsDisabled}
              >
                <svg
                  fill="#707070"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13,3 L5,3 L5,21 L15,21 L15,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,3 C3,1.8954305 3.8954305,1 5,1 L15.4142136,1 L21,6.58578644 L21,14 L19,14 L19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 Z M19,19 L19,17 L21,17 L21,19 L23,19 L23,21 L21,21 L21,23 L19,23 L19,21 L17,21 L17,19 L19,19 Z M18.5857864,7 L15,3.41421356 L15,7 L18.5857864,7 Z"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="link-name">Create BOQ</span>
              </button>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("history")}
              >
                <svg
                  fill="#707070"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z" />
                </svg>
                <span className="link-name" onClick={() => navigate("history")}>
                  BOQ History
                </span>
              </div>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("client-user")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.1607 7.73404C7.1607 5.03401 9.33029 2.85062 12 2.85062C14.6697 2.85062 16.8393 5.03401 16.8393 7.73404C16.8393 8.70559 16.5884 10.1591 15.8525 11.3492C15.1294 12.5184 13.9408 13.4366 12.0052 13.4099C11.7981 13.407 11.6279 13.5726 11.625 13.7796C11.6222 13.9867 11.7877 14.1569 11.9948 14.1598C14.2306 14.1907 15.6491 13.1039 16.4904 11.7436C16.8956 11.0883 17.1674 10.3704 17.3393 9.68278V9.75097C17.3393 9.95807 17.5072 10.126 17.7143 10.126C17.9214 10.126 18.0893 9.95807 18.0893 9.75097V7.73404C18.0893 7.52693 17.9214 7.35904 17.7143 7.35904C17.6664 7.35904 17.6207 7.36799 17.5787 7.38431C17.3995 4.43855 14.9731 2.10062 12 2.10062C9.02688 2.10062 6.60042 4.43855 6.4213 7.38431C6.37924 7.36799 6.33351 7.35904 6.2857 7.35904C6.07859 7.35904 5.9107 7.52693 5.9107 7.73404V9.75097C5.9107 9.95807 6.07859 10.126 6.2857 10.126C6.4928 10.126 6.6607 9.95807 6.6607 9.75097V8.0877C6.69979 8.10152 6.74187 8.10904 6.7857 8.10904C6.9928 8.10904 7.1607 7.94115 7.1607 7.73404ZM11.9999 11.306C13.7889 11.306 15.2499 9.84178 15.2499 8.02219C15.2499 6.20259 13.7889 4.73833 11.9999 4.73833C10.2109 4.73833 8.74992 6.20259 8.74992 8.02219C8.74992 9.84178 10.2109 11.306 11.9999 11.306ZM11.9999 12.056C14.2091 12.056 15.9999 10.25 15.9999 8.02219C15.9999 5.79435 14.2091 3.98833 11.9999 3.98833C9.79078 3.98833 7.99992 5.79435 7.99992 8.02219C7.99992 10.25 9.79078 12.056 11.9999 12.056ZM17.1762 16.1952H6.82364C5.67837 16.1952 4.74994 17.1236 4.74994 18.2689V20.2858C4.74994 20.7627 5.13656 21.1494 5.61348 21.1494H18.3864C18.8633 21.1494 19.2499 20.7627 19.2499 20.2858V18.2689C19.2499 17.1236 18.3215 16.1952 17.1762 16.1952ZM6.82364 15.4452C5.26415 15.4452 3.99994 16.7094 3.99994 18.2689V20.2858C3.99994 21.177 4.72235 21.8994 5.61348 21.8994H18.3864C19.2775 21.8994 19.9999 21.177 19.9999 20.2858V18.2689C19.9999 16.7094 18.7357 15.4452 17.1762 15.4452H6.82364Z"
                    fill="black"
                  />
                </svg>
                <button className="link-name">Client Management</button>
              </div>
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                <svg
                  fill="#707070"
                  //   height="20"
                  viewBox="0 0 20 20"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M3 3C2.44772 3 2 3.44772 2 4V16C2 16.5523 2.44772 17 3 17C3.55228 17 4 16.5523 4 16V4C4 3.44772 3.55228 3 3 3ZM13.2929 12.2929C12.9024 12.6834 12.9024 13.3166 13.2929 13.7071C13.6834 14.0976 14.3166 14.0976 14.7071 13.7071L17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10C18 9.73478 17.8946 9.48043 17.7071 9.29289L14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289C12.9024 6.68342 12.9024 7.31658 13.2929 7.70711L14.5858 9L7 9C6.44771 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H14.5858L13.2929 12.2929Z"
                    fill="#707070"
                    fillRule="evenodd"
                  />
                </svg>

                <span className="link-name">Logout</span>
              </div>
            </li>
            <li className="mode">
              <div style={{ cursor: "pointer" }}>
                <svg
                  className="moonIcon"
                  fill="#707070"
                  width="24"
                  data-name="Layer 2"
                  id="Layer_2"
                  viewBox="0 0 35 35"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
                </svg>
                <span className="link-name">Dark Mode</span>
              </div>
              <div className="mode-toggle" onClick={handleModeToggle}>
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <section className="dashboard">
        <div className="top">
          <svg
            onClick={handleSidebarToggle}
            style={{ cursor: "pointer" }}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H12M4 18H20"
              stroke="#4A5568"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          {/* <i className="uil uil-bars "></i> */}
          <div className="search-box">
            <svg
              height="24px"
              id="Layer_1"
              //   style="enable-background:new 0 0 512 512;"
              version="1.1"
              viewBox="0 0 512 512"
              //   width="512px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
            </svg>
            <input
              type="text"
              id="searhHistory"
              name="searhHistory"
              placeholder="Search here..."
            />
          </div>
          <img
            className="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
        </div>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
