import React, { useContext, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import getFormData from "../../utility/getFormData";
import { useAllModalContext } from "../../context/AllModalContext";
import { useAdminContext } from "../../context/AdminContext";
import { RxCross2 } from "react-icons/rx";

const AdminPopUp = () => {
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const { prevAdminData, handleCloseAdmin, fetchAdmin } = useAdminContext();
  const [adminInfo, setadminInfo] = useState(prevAdminData);
  console.log(prevAdminData);
  console.log(adminInfo);

  // console.log(prevAdminData);

  const navigate = useNavigate();
  const handleFormInput = (e) => {
    setEmailError(false);
    setadminInfo((prev) => {
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
  // console.log(validateEmail(adminInfo.email));

  const validateProjectInfo = () => {
    // console.log("Hello")
    const { name, department, phone_number, email } = adminInfo;
    if (
      name === "" ||
      department === "" ||
      phone_number === "" ||
      email === "" ||
      !validateEmail(email) ||
      adminInfo.password !== confirmPassword ||
      adminInfo.password.length < 6
    ) {
      console.log("Hello");
      console.log(validateEmail(email));
      if (!validateEmail(email)) {
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
      console.log(adminInfo.id);
      if (adminInfo.id) {
        Swal.fire({
          title: "Do you want to update this Admin?",
          text: "This Admin can Manage Project!",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes, update user!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .post(`/admin/update/${adminInfo.id}`, getFormData(adminInfo))
              .then((res) => {
                console.log(res.data);
                handleCloseAdmin(false);
                Swal.fire({
                  title: "Congretchulation!",
                  text: "Admin updated successfully.",
                  icon: "success",
                });
                fetchAdmin();
                // handleOpenAdmin();
                console.log("updated info ");
              })
              .catch((err) => {
                handleCloseAdmin(false);
                Swal.fire({
                  title: "Failed to update Admin.",
                  text: err.response.data.message,
                  icon: "error",
                });
                console.log(err);
              });
          }
        });
      } else {
        Swal.fire({
          title: "Do you want to create this Admin?",
          text: "This Admin Can Manage All Action!",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes, create Admin!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .post("/admin/create", getFormData(adminInfo))
              .then((res) => {
                console.log(res.data);
                handleCloseAdmin(false);
                Swal.fire({
                  title: "Congretchulation!",
                  text: "Admin created successfully.",
                  icon: "success",
                });
                fetchAdmin();
                // handleOpenAdmin();
                console.log("Hello ");
              })
              .catch((err) => {
                console.log(err);
                handleCloseAdmin(false);
                Swal.fire({
                  title: "Failed to create Admin.",
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
    setadminInfo({
      name: "",
      department: "",
      phone_number: "",
      email: "",
      password: "",
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
                Create New Admin
              </h3>
              {/* {console.log(handleCloseBOQ)} */}
              <button
                onClick={() => handleCloseAdmin()}
                type="button"
                className="bg-transparent hover:bg-gray-200  text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                data-modal-toggle="crud-modal"
              >
                <RxCross2 className="text-2xl" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form onSubmit={hanleFormSubmit} className="p-4 md:p-5 bg-black ">
              <div className="grid gap-4 mb-4 grid-cols-2 bg-black ">
                <div className="col-span-2 bg-black ">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Admin name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleFormInput}
                    value={adminInfo.name}
                    id="name"
                    className={`${
                      adminInfo.name === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type Admin name..."
                    required=""
                  />
                  {adminInfo.name === "" && error ? (
                    <p className="text-red-600">Admin name can't be empty</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    phone number
                  </label>
                  {/* {console.log(error)} */}
                  <input
                    type="tel"
                    name="phone_number"
                    onChange={handleFormInput}
                    value={adminInfo.phone_number}
                    id="phone_number"
                    className={`${
                      adminInfo.phone_number === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type phone numbert..."
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Email
                  </label>
                  {/* {console.log(error)} */}
                  <input
                    type="text"
                    name="email"
                    onChange={handleFormInput}
                    value={adminInfo.email}
                    id="email"
                    className={`${
                      adminInfo.email === "" && error && emailError
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
                <div className="col-span-1 sm:col-span-2">
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
                    value={adminInfo.department}
                    id="department"
                    className={`${
                      adminInfo.department === "" && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type department..."
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Password
                  </label>
                  {/* {console.log(error)} */}
                  <input
                    type="text"
                    name="password"
                    onChange={handleFormInput}
                    value={adminInfo.password}
                    id="password"
                    className={`${
                      adminInfo.password === "" &&
                      error &&
                      adminInfo.password.length < 6
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type password..."
                    required=""
                  />
                  {adminInfo.password.length < 6 && error ? (
                    <p className="text-red-600">
                      Password must be at least 6 character long!
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium  text-white "
                  >
                    Confirm password
                  </label>
                  {/* {console.log(error)} */}
                  <input
                    type="text"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    id="confirmPassword"
                    className={`${
                      adminInfo.password !== confirmPassword && error
                        ? "border-2 border-red-500 bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        : "bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    }`}
                    placeholder="Type confirmPassword..."
                    required=""
                  />
                  {adminInfo.password !== confirmPassword && error ? (
                    <p className="text-red-600">Password doesn't match!</p>
                  ) : (
                    ""
                  )}
                </div>
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
                  Add new Admin
                </button>
                <button
                  onClick={hanleRefreshForm}
                  className=" text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
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

export default AdminPopUp;
