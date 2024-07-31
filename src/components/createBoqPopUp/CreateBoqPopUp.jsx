import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useBoqContext } from "../../context/BoqContext";
import { MdAutorenew } from "react-icons/md";

const CreateBoqPopUp = ({ handleCloseBOQ }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [gpClientName, setGpClientName] = useState({});
  const [changing, setChanging] = useState(false);
  const navigate = useNavigate();

  const {
    boq,
    error,
    nameForGP_user_id,
    handleFormInput,
    getGPUserId,
    clientsIdWithName,
    generateRandomId,
    validateboq,
  } = useBoqContext();

  const handleKeyDown = (event) => {
    if (!clientsIdWithName || clientsIdWithName.length === 0) return;

    switch (event.key) {
      case "ArrowDown":
        setHighlightedIndex((prevIndex) =>
          prevIndex < clientsIdWithName.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : clientsIdWithName.length - 1
        );
        break;
      case "Enter":
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < clientsIdWithName.length
        ) {
          console.log(clientsIdWithName[highlightedIndex]);
          getGPUserId(clientsIdWithName[highlightedIndex].id); // Assuming the item has a 'name' property
          // setAllProduct((prev) => [...prev, clientsIdWithName[highlightedIndex]]);
          setChanging(false);
          setIsFocused(false);
        }
        break;
      case "Escape":
        setChanging(false);
        setIsFocused(false);
        break;
      default:
        break;
    }
  };

  const handleOnFocus = () => {
    setIsFocused(true);
    setChanging(true);
  };
  const handleOnBlur = () => {
    setIsFocused(false);
    setChanging(false);
  };

  const handleItemClick = (item) => {
    setGpClientName(item);
    getGPUserId(item.id); // Adjust according to the structure of your data
    setIsFocused(false);
  };

  // console.log(clientsIdWithName);
  const hanleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(boq);
    if (validateboq()) {
      navigate("createboq");
      handleCloseBOQ();
    }
  };
  // console.log(error)

  return (
    <div
      className={`z-20 opacity-1 transition-all delay-300 glassyEffect absolute inset-0 flex justify-center items-center `}
    >
      <div className=" bg-black ">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-black rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-white ">
                Create New Product
              </h3>
              {/* {console.log(handleCloseBOQ)} */}
              <button
                onClick={() => handleCloseBOQ()}
                type="button"
                className="bg-transparent hover:bg-gray-200  text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form onSubmit={hanleFormSubmit} className="p-4 md:p-5 bg-black ">
              <div className="grid gap-4 mb-4 grid-cols-2 bg-black ">
                <div className="col-span-2 bg-black ">
                  <label
                    htmlFor="Project_name"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    BOQ Title
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="Project_name"
                    onChange={handleFormInput}
                    value={boq.Project_name}
                    id="Project_name"
                    className={`${
                      boq.Project_name === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type project name..."
                    required
                  />
                </div>
                <div className="col-span-2 bg-black sm:col-span-1">
                  <label
                    htmlFor="AEXP_BOQ_Creator"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Provider user name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="AEXP_BOQ_Creator"
                    onChange={handleFormInput}
                    value={boq.AEXP_BOQ_Creator}
                    id="AEXP_BOQ_Creator"
                    className={`${
                      boq.AEXP_BOQ_Creator === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type provider user name..."
                    required=""
                  />
                </div>
                <div className="col-span-2 bg-black sm:col-span-1">
                  <label
                    htmlFor="BOQ_ID"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Provider code
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={generateRandomId}
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <input
                      autoComplete="off"
                      type="text"
                      name="BOQ_ID"
                      onChange={handleFormInput}
                      value={boq.BOQ_ID}
                      id="BOQ_ID"
                      className={`${
                        boq.BOQ_ID === "" && error
                          ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      }`}
                      placeholder="Type BOQ ID..."
                      required
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="client_Name"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Client Name
                  </label>
                  {/* {console.log(clientsIdWithName)} */}
                  <input
                    type="text"
                    name="client_Name"
                    onChange={(e) => handleFormInput(e)}
                    onFocus={() => handleOnFocus()}
                    onKeyDown={handleKeyDown}
                    onBlur={() => handleOnBlur()}
                    autoComplete="off"
                    value={
                      gpClientName?.client_name
                        ? gpClientName?.client_name
                        : nameForGP_user_id
                    }
                    id="client_Name"
                    className={`${
                      nameForGP_user_id === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Enter name..."
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="GP_user_id"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Client Id
                  </label>
                  {isFocused && clientsIdWithName.length && (
                    <ul className="absolute z-50 bg-white border border-gray-300 w-[43%] rounded-md mt-1">
                      {clientsIdWithName?.map((item, index) => (
                        <li
                          // id="GP_user_id"
                          key={index}
                          className={`p-2 cursor-pointer flex justify-between  ${
                            highlightedIndex === index
                              ? "bg-gray-200 text-black"
                              : ""
                          }`}
                          onMouseDown={() => handleItemClick(item)} // Use onMouseDown to avoid blur event
                          onMouseEnter={() => setHighlightedIndex(index)}
                        >
                          {/* {console.log(item)} */}
                          <span className="text-black">
                            {item.client_name}{" "}
                          </span>
                          <span className="text-black pr-2">{item.id} </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {boq?.GP_user_id && !isFocused && !changing && (
                    <input
                      type="text"
                      name="GP_user_id Name"
                      autoComplete="off"
                      value={boq?.GP_user_id}
                      id="GP_user_id"
                      disabled
                      className={`${
                        boq?.GP_user_id === "" && error
                          ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      }`}
                      placeholder="Enter name..."
                      required=""
                    />
                  )}
                  {/* <select
                    id="GP_user_id"
                    name="GP_user_id"
                    ref={inputElement}
                    onChange={handleFormInput}
                    value={nameForGP_user_id}
                    className={`${
                      nameForGP_user_id !== "" && error
                        ? "cursor-pointer bg-gray-50 border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        : "absolute w-40 border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 cursor-pointer focus:ring-primary-500 focus:border-primary-500 "
                    }`}
                  >
                    <option defaultValue="">Select Aria Circle</option>

                    {clientsIdWithName?.map((item) => {
                      return (
                        <option
                          className="flex justify-between"
                          key={item.id}
                          value={item.id}
                        >
                          {item.client_name} : {item.id}
                        </option>
                      );
                    })}
                  </select> */}
                </div>

                {/* <div className="col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium  text-white "
                      >
                        Product Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        className="block p-2.5 w-full text-sm  text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write product description here"
                      ></textarea>
                    </div> */}
              </div>
              <button
                onClick={hanleFormSubmit}
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
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
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBoqPopUp;
