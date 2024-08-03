import React, { useContext, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useClientContext } from "../../context/ClientContext";
import Swal from "sweetalert2";
import getFormData from "../../utility/getFormData";

const CreateClientPopUp = () => {
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { handleCloseClient, prevClientData } = useClientContext();
  const [clientInfo, setClientInfo] = useState(prevClientData);
  console.log(clientInfo);
  // console.log(prevClientData);

  const navigate = useNavigate();
  const handleFormInput = (e) => {
    setEmailError(false);
    setClientInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const validateEmail = (email) => {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    return re.test(email);
  };
  console.log(validateEmail(clientInfo.email_id));

  const validateProjectInfo = () => {
  // console.log("Hello")
    const { client_name, department, circle, contact_number, email_id } =
      clientInfo;
    if (
      client_name === "" ||
      department === "" ||
      contact_number === "" ||
      email_id === "" ||
      !validateEmail(email_id)
    ) {
      console.log("Hello")
      console.log(validateEmail(email_id));
      if (!validateEmail(email_id)) {
        setEmailError(true);
      }
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

 
  const hanleFormSubmit = (e) => {
    e.preventDefault();
    if (validateProjectInfo()) {
      console.log(clientInfo.id);
      if (clientInfo.id) {
        Swal.fire({
          title: "Do you want to update this user?",
          text: "This user can update Project!",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes, update user!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .post(
                `/client-user/update/${clientInfo.id}`,
                getFormData(clientInfo)
              )
              .then((res) => {
                console.log(res.data);
                handleCloseClient(false);
                Swal.fire({
                  title: "Congretchulation!",
                  text: "User updated successfully.",
                  icon: "success",
                });
                // handleOpenClient();
                console.log("updated info ");
              })
              .catch((err) => {
                handleCloseClient(false);
                Swal.fire({
                  title: "Failed to update user.",
                  text: err,
                  icon: "error",
                });
                console.log(err);
              });
          }
        });
      } else {
        Swal.fire({
          title: "Do you want to create this user?",
          text: "This user can create Project!",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes, create user!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .post("/client-user/create", getFormData(clientInfo))
              .then((res) => {
                console.log(res.data);
                handleCloseClient(false);
                Swal.fire({
                  title: "Congretchulation!",
                  text: "User created successfully.",
                  icon: "success",
                });
                // handleOpenClient();
                console.log("Hello ");
              })
              .catch((err) => {
                console.log(err)
                handleCloseClient(false);
                Swal.fire({
                  title: "Failed to create user.",
                  text: err.response.data.message,
                  icon: "error",
                });
                console.log(err);
              });
          }
        });
      }
    } else {
      console.log("Form is invalid. Please fill out all fields.");
    }
  };

  const hanleRefreshForm = (e) => {
    e.preventDefault();
    setError(false);
    setClientInfo({
      client_name: "",
      designation: "",
      department: "",
      circle: "",
      contact_number: "",
      email_id: "",
    });
  };

  // console.log(error);
  return (
    <div
      className={`z-20 opacity-1 transition-all delay-300 glassyEffect absolute inset-0 flex justify-center items-center`}
    >
      <div className=" bg-black ">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-black rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-white ">
                Create New Client
              </h3>
              {/* {console.log(handleCloseBOQ)} */}
              <button
                onClick={() => handleCloseClient()}
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
                    htmlFor="client_name"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Client name
                  </label>
                  <input
                    type="text"
                    name="client_name"
                    onChange={handleFormInput}
                    value={clientInfo.client_name}
                    id="client_name"
                    className={`${
                      clientInfo.client_name === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type client name..."
                    required=""
                  />
                  {clientInfo.client_name === "" && error ? (
                    <p className="text-red-600">Client name can't be empty</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-span-2 bg-black ">
                  <label
                    htmlFor="designation"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    onChange={handleFormInput}
                    value={clientInfo.designation}
                    id="designation"
                    className={`${
                      clientInfo.designation === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type designation..."
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Contact number
                  </label>
                  {/* {console.log(error)} */}
                  <input
                    type="tel"
                    name="contact_number"
                    onChange={handleFormInput}
                    value={clientInfo.contact_number}
                    id="contact_number"
                    className={`${
                      clientInfo.contact_number === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type contact numbert..."
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="email_id"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Email
                  </label>
                  {/* {console.log(error)} */}
                  <input
                    type="text"
                    name="email_id"
                    onChange={handleFormInput}
                    value={clientInfo.email_id}
                    id="email_id"
                    className={`${
                      clientInfo.email_id === "" && error && emailError
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type email ..."
                    required=""
                  />
                  {emailError && error ? (
                    <p className="text-red-600">Email is not Valid!</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Department
                  </label>
                  {/* {console.log(error)} */}
                  <input
                    type="text"
                    name="department"
                    onChange={handleFormInput}
                    value={clientInfo.department}
                    id="department"
                    className={`${
                      clientInfo.department === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type department..."
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="circle"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Aria Circle
                  </label>
                  <select
                    id="circle"
                    name="circle"
                    onChange={handleFormInput}
                    value={clientInfo.circle}
                    className={`${
                      clientInfo.circle === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 cursor-pointer focus:ring-primary-500 focus:border-primary-500 "
                        : "cursor-pointer bg-gray-50 border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    }`}
                    // className="cursor-pointer bg-gray-50 border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    <option defaultValue="">Select Aria Circle</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chattogram">Chattogram</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="khulna">Khulna</option>
                    <option value="barishal">Barishal</option>
                    <option value="rangpur">Rangpur</option>
                    <option value="mymensingh">Mymensingh</option>
                  </select>
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
              <div className="flex justify-between">
                <button
                  onClick={hanleFormSubmit}
                  type="submit"
                  className=" text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
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
                  Add new client
                </button>
                <button
                  onClick={hanleRefreshForm}
                  className=" text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {/* <svg
                    className="me-1 -ms-1 w-5 h-5 opacity-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg> */}
                  Refresh Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClientPopUp;
