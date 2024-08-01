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
import { RiDashboardLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
const Layout = () => {
  const navigate = useNavigate(); 
  const { logout } = useAuth();
  const { createBoqModal, handleBoqPopup, handleCloseBOQ } =
    useAllModalContext();
  const [modeState, setModeState] = useState(localStorage.getItem("mode"));
  const [navName, setNavName] = useState("/dashboard");
  // console.log("🚀 ~ Layout ~ createBoqModal:", createBoqModal);

  const { createClientModal, handleOpenClient, handleCloseClient, fetchUsers } =
    useClientContext();
  const { allBoq, fetchBoq, createBoqIsDisabled, boqDisable } = useBoqContext();
  // console.log(allBoq);

  useEffect(() => {
    // Set initial mode based on localStorage
    const mode = localStorage.getItem("mode") || "light";
    setModeState(mode);
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
      setModeState("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setModeState("light");
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

  // console.log(window.location.href);
  // console.log(window.location.href.includes("/dashboard/createboq"));
  useEffect(() => {
    if (window.location.href.includes("/dashboard/createboq")) {
      setNavName("/dashboard/createboq");
    } else if (window.location.href.includes("/dashboard/history")) {
      setNavName("/dashboard/history");
    } else if (window.location.href.includes("/dashboard/client-user")) {
      setNavName("/dashboard/client-user");
    } else if (window.location.href.includes("/dashboard/admin")) {
      setNavName("/dashboard/admin");
    } else {
      setNavName("/dashboard");
    }
  }, [window.location.href]);

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
                className={`!rounded-md ${
                  navName === "/dashboard" ? "!bg-teal-600" : ""
                } pl-2`}
              >
                <RiDashboardLine
                  className={`${
                    navName === "/dashboard" ? "text-white" : "text-gray-500"
                  }  text-2xl`}
                />
                <button
                  className={`${
                    navName === "/dashboard" ? "!text-white" : " "
                  } link-name !font-semibold !ml-[14px]`}
                >
                  Dashboard
                </button>
              </div>
            </li>
            <li>
              <button
                style={{ cursor: "pointer" }}
                onClick={handleBoqPopup}
                disabled={createBoqIsDisabled}
                className={` pl-2 !rounded-md w-full ${
                  navName === "/dashboard/createboq" ? "!bg-teal-600" : ""
                }`}
              >
                <FaRegEdit
                  className={`${
                    navName === "/dashboard/createboq"
                      ? "text-white"
                      : "text-gray-500"
                  }  text-2xl pl-1`}
                />
                <span
                  className={`${
                    navName === "/dashboard/createboq" ? "!text-white" : " "
                  } link-name !font-semibold !ml-[12px]`}
                >
                  Create BOQ
                </span>
              </button>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("history")}
                className={` pl-2 !rounded-md ${
                  navName === "/dashboard/history" ? "!bg-teal-600" : ""
                }`}
              >
                <FaHistory
                  className={`${
                    navName === "/dashboard/history"
                      ? "text-white"
                      : "text-gray-500"
                  }  text-2xl pl-1`}
                />
                <span
                  onClick={() => navigate("history")}
                  className={`${
                    navName === "/dashboard/history" ? "!text-white" : " "
                  } link-name !font-semibold !ml-[11px] !rounded-md`}
                >
                  BOQ History
                </span>
              </div>
            </li>
            <li>
              {/* {console.log(navName)} */}
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("client-user")}
                className={` pl-2 !rounded-md ${
                  navName === "/dashboard/client-user" ? "!bg-teal-600" : ""
                }`}
              >
                <MdOutlineManageAccounts
                  className={`${
                    navName === "/dashboard/client-user"
                      ? "text-white"
                      : "text-gray-500"
                  }  text-3xl `}
                />
                <button
                  className={`${
                    navName === "/dashboard/client-user" ? "!text-white" : " "
                  } link-name !font-semibold !ml-[6px] !rounded-md`}
                >
                  Client Management
                </button>
              </div>
            </li>
            <li>
              {/* {console.log(navName)} */}
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("admin")}
                className={` pl-2 !rounded-md ${
                  navName === "/dashboard/admin" ? "!bg-teal-600" : ""
                }`}
              >
                <GrUserAdmin
                  className={`${
                    navName === "/dashboard/admin"
                      ? "text-white"
                      : "text-gray-500"
                  }  text-2xl `}
                />
                <button
                  className={`${
                    navName === "/dashboard/admin" ? "!text-white" : " "
                  } link-name !font-semibold !ml-[12px] !rounded-md`}
                >
                  Admin Management
                </button>
              </div>
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                <HiLogout className="text-gray-500 font-bold text-2xl pl-1" />

                <span className="link-name !font-semibold">Logout</span>
              </div>
            </li>
            <li className="mode">
              {/* {console.log(modeState)} */}
              {modeState === "light" ? (
                <div style={{ cursor: "pointer" }}>
                  <FiSun className="text-gray-500 font-bold text-2xl pl-1" />
                  <span className="link-name !font-semibold">Light Mode</span>
                </div>
              ) : (
                <div style={{ cursor: "pointer" }}>
                  <FaRegMoon className="text-gray-500 font-bold text-2xl pl-1" />
                  <span className="link-name !font-semibold">Dark Mode</span>
                </div>
              )}
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
