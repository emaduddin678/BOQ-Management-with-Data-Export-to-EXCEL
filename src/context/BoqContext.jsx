import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
// import {  useNavigate } from "react-router-dom";
import getFormData from "../utility/getFormData";
import Swal from "sweetalert2";
import { useAllModalContext } from "./AllModalContext";

const BoqContext = createContext();

export const useBoqContext = () => {
  return useContext(BoqContext);
};

const BoqContextProvider = ({ children }) => {
  // const navigate = useNavigate()
  const [allBoq, setAllBoq] = useState([]);
  const [error, setError] = useState(false);
  const [nameForGP_user_id, setNameForGP_user_id] = useState("");
  const [clientsIdWithName, setClientsIdWithName] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [createBoqIsDisabled, setCreateBoqIsDisabled] = useState(false);
  const [boq, setBoq] = useState({
    Project_name: "",
    AEXP_BOQ_Creator: "",
    GP_user_id: "",
    GP_user_email: "",
    BOQ: [],
    BOQ_ID: "",
  });

  const getGPUserId = (id, email) => {
    setBoq((prev) => ({ ...prev, GP_user_id: id, GP_user_email: email }));
  };
  const generateRandomId = () => {
    const id = Math.random() * 1000;
    const idTxt = boq.Project_name.split(" ")[0].toUpperCase();
    // console.log(idTxt, Math.round(id));
    // const showId = (idTxt, Math.round(id))
    // console.log(showId)
    setBoq((prev) => ({ ...prev, BOQ_ID: `${idTxt}${Math.round(id)}` }));
  };
  // console.log(boq);
  const fetchUsersByName = (name) => {
    try {
      // console.log(name);
      if (name === "") {
        return;
      } else {
        axios
          .get(`/client-user/name/${name}`)
          .then((res) => setClientsIdWithName(res.data.data))
          .catch((err) => {
            throw err;
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(nameForGP_user_id);
    fetchUsersByName(nameForGP_user_id);
    if (nameForGP_user_id === "") {
      setClientsIdWithName([]);
    }
  }, [nameForGP_user_id]);
  // const user = useAuth();
  const handleFormInput = (e) => {
    if (e.target.name === "client_Name") {
      setNameForGP_user_id(e.target.value);
    } else if (e.target.name === "Project_name") {
      const idTxt = boq.Project_name.split(" ")[0].toUpperCase();
      // const aaa =idTxt, (e.target.value)
      setBoq((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
          BOQ_ID: idTxt,
        };
      });
    } else {
      setBoq((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const validateboq = () => {
    const { Project_name, AEXP_BOQ_Creator, GP_user_id, BOQ_ID } = boq;
    if (
      Project_name === "" ||
      AEXP_BOQ_Creator === "" ||
      GP_user_id === "" ||
      BOQ_ID === ""
    ) {
      console.log(boq);
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const createBoq = (searchedItem) => {
    if (validateboq() && Object.keys(searchedItem).length !== 0) {
      setAllProduct((prev) => [...prev, searchedItem]);
    } else {
      Swal.fire({
        title: "Did you Create BOQ project?",
        text: "You must create a project first..",
        icon: "question",
        timer: 2000,
      });
      // handleCloseBOQ();
    }
  };
  useEffect(() => {
    setBoq((prev) => ({
      ...prev,
      BOQ: allProduct,
    }));
  }, [allProduct]);

  // console.log(boq);

  const saveTableDataToDatabase = () => {
    // console.log(boq);
    if (
      boq.AEXP_BOQ_Creator !== "" &&
      boq.Project_name !== "" &&
      boq.GP_user_id !== "" &&
      boq.BOQ.length !== 0 &&
      boq.BOQ_ID !== ""
    ) {
      axios
        .post("/boq/create", getFormData(boq, true))
        .then((res) => console.log(res.data.data.BOQ))
        .catch((err) => console.log(err));
    }
  };

  const fetchBoq = () => {
    axios
      .get("/boq/all-boq")
      .then((res) => setAllBoq(res.data.data))
      .catch((err) => console.log(err));
  };

  const boqDisable = () => {
    if (window.location.href.includes("/dashboard/createboq")) {
      setCreateBoqIsDisabled(true);
    } else {
      setCreateBoqIsDisabled(false);
    }
  };

  const updateBoqFromHistoryPage = (item) => {
    const oldBoq = JSON.parse(item.BOQ);
    console.log(item.BOQ);

    console.log(oldBoq);
    console.log(JSON.parse(oldBoq));
    console.log(typeof oldBoq);
    setBoq((prev) => ({
      ...prev,
      ...item,
      BOQ: JSON.parse(oldBoq),
    }));

    return true;
    // console.log({
    //   ...item,
    //   BOQ: JSON.parse(oldBoq),
    // });
  };

  const value = {
    allBoq,
    boq,
    error,
    handleFormInput,
    fetchBoq,
    clientsIdWithName,
    nameForGP_user_id,
    generateRandomId,
    getGPUserId,
    validateboq,

    createBoq,
    allProduct,
    createBoqIsDisabled,
    boqDisable,
    saveTableDataToDatabase,
    updateBoqFromHistoryPage,
  };
  return <BoqContext.Provider value={value}>{children}</BoqContext.Provider>;
};

export default BoqContextProvider;
