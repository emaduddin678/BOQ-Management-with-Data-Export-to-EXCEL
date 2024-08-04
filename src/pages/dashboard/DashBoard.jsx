import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClientContext } from "../../context/ClientContext";

import { useBoqContext } from "../../context/BoqContext";
import formateDate from "../../utility/getFormattedDate";

const DashBoard = () => {
  const navigate = useNavigate();
  const { fetchUsers, clientData } = useClientContext();
  const { allBoq, fetchBoq, boqDisable } = useBoqContext();

  useEffect(() => {
    // Set initial mode based on localStorage
    const mode = localStorage.getItem("mode") || "light";
    if (mode === "dark") {
      document.body.classList.add("dark");
    }
    fetchUsers();
    fetchBoq();

    boqDisable();
  }, []);

  return (
    <div className="dash-content">
      <div className="overview">
        <div className="title">
          <i className="uil uil-tachometer-fast-alt"></i>
          <span className="text">Dashboard</span>
        </div>
        <div className="boxes">
          <div className="box box1">
            <i className="uil uil-thumbs-up"></i>
            <span className="text">Total Projects</span>
            <span className="number">{allBoq.length}</span>
          </div>
          <div className="box box2">
            <i className="uil uil-comments"></i>
            <span className="text">Total Clients</span>
            <span className="number">{clientData.length}</span>
          </div>
          <div className="box box3">
            <i className="uil uil-share"></i>
            <span className="text">Current Project</span>
            <span className="number">6</span>
          </div>
        </div>
      </div>
      <div className="activity">
        <div className="title">
          <i className="uil uil-clock-three"></i>
          <span className="text">Recent Activity</span>
        </div>
        <div className="activity-data">
          <table className="min-w-full text-xs">
            <thead className="">
              <tr className="text-left">
                <th className="p-3">Project Name</th>
                <th className="p-3">Client Name</th>
                <th className="p-3">Provider Name</th>
                <th className="p-3">Created At</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {allBoq.length > 0 ? (
                allBoq.map(
                  (item, index) =>
                    index < 10 && (
                      <tr
                        key={item.id}
                        className="border-b border-opacity-20 border-gray-700 "
                      >
                        <td className="p-3">
                          <p>{item.Project_name}</p>
                        </td>
                        <td className="p-3">
                          <p>{item.GP_user_name}</p>
                        </td>
                        <td className="p-3">
                          <p>{item.AEXP_BOQ_Creator}</p>
                        </td>
                        <td className="p-3">
                          <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                        </td>
                        <td className="p-3">
                          <p
                            onClick={() => navigate("history")}
                            className="cursor-pointer rounded-md inline text-white font-semibold px-3 py-1 bg-teal-500"
                          >
                            View Project Details
                          </p>
                        </td>
                      </tr>
                    )
                )
              ) : (
                <tr>
                  <td colSpan="6" className="p-3 text-center bg-gray-700">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
