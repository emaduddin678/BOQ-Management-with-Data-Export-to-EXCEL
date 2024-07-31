import axios from "axios";
import React, { useEffect, useState } from "react";
import { useClientContext } from "../../context/ClientContext";
import { useBoqContext } from "../../context/BoqContext";

const ClientManagement = () => {
  const {
    clientData,
    createClientModal,
    handleCloseClient,
    handleOpenClient,
    handleDelete,
    fetchUsersByName,
    fetchUsersById,
    handleOpenUpdateClient,
  } = useClientContext();
  const { boqDisable } = useBoqContext();
  useEffect(() => {
    boqDisable();
  }, []);

  return (
    <div className="pt-20">
      <div className="container p-2 mx-auto sm:p-4 text-gray-100">
        <div className="flex justify-between items-center mb-5">
          <button
            onClick={handleOpenClient}
            className="bg-gray-700 text-xl font-semibold rounded-md px-4 py-1 flex justify-between items-center"
          >
            {" "}
            <svg
              className="me-1 -ms-1 w-6 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Create New Client
          </button>
          <div className="flex justify-between items-center gap-5">
            <fieldset className="w-full space-y-1 text-gray-100">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-gray-100"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  id="Search"
                  onChange={(e) => fetchUsersByName(e.target.value)}
                  placeholder="Search by name..."
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-violet-400"
                />
              </div>
            </fieldset>
            <fieldset className="w-full space-y-1 text-gray-100">
              <label htmlFor="searchId" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-gray-100"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="searchId"
                  id="searchId"
                  onChange={(e) => fetchUsersById(e.target.value)}
                  placeholder="Search by id..."
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-violet-400"
                />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Id</th>
                <th className="p-3">Name</th>
                <th className="p-3">Department</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Email</th>
                <th className="p-3  w-48">Action</th>
              </tr>
            </thead>
            <tbody>
              {clientData.length > 0 ? (
                clientData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-opacity-20 border-gray-700 bg-gray-900"
                  >
                    {/* {console.log(item)} */}
                    <td className="p-3">
                      <p>{item.id}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.client_name}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.department}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.contact_number}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.email_id}</p>
                    </td>
                    <td className="p-3 flex justify-between">
                      <span
                        onClick={() => handleOpenUpdateClient(item)}
                        className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900"
                      >
                        <span>Update</span>
                      </span>
                      <span
                        onClick={() => handleDelete(item.id)}
                        className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-red-500 text-gray-900"
                      >
                        <span>Delete</span>
                      </span>
                    </td>
                  </tr>
                ))
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

export default ClientManagement;
