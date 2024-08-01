import axios from "axios";
import React, { useEffect, useState } from "react";
import { useClientContext } from "../../context/ClientContext";
import { useBoqContext } from "../../context/BoqContext";
import { FaPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

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
            className="text-xl font-semibold rounded-md px-4 py-1 flex justify-between items-center gap-2 bg-teal-600"
          >
            <FaPlus />
            <span>Create New Client</span>
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
                    <BsSearch />
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  id="Search"
                  onChange={(e) => fetchUsersByName(e.target.value)}
                  placeholder="Search by name..."
                  className="w-32 py-2 pl-10 text-sm rounded-md font-medium sm:w-auto focus:outline-none bg-teal-600 !text-white placeholder:text-white focus:bg-teal-500 focus:border-gray-900"
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
                    <BsSearch />
                  </button>
                </span>
                <input
                  type="search"
                  name="searchId"
                  id="searchId"
                  onChange={(e) => fetchUsersById(e.target.value)}
                  placeholder="Search by id..."
                  className="w-32 py-2 pl-10 text-sm rounded-md font-medium sm:w-auto focus:outline-none bg-teal-600 !text-white placeholder:text-white focus:bg-teal-500 focus:border-gray-900"
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
