import React, { useContext, useEffect, useState } from "react";

const AllModalContextP = React.createContext();

export function useAllModalContext() {
  return useContext(AllModalContextP);
}

// const user = useAuth();

export function AllModalContext({ children }) {
  const [createBoqModal, setCreateBoqModal] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);

  const handleBoqPopup = () => {
    setCreateBoqModal(true);
  };

  const handleCloseBOQ = () => {
    setCreateBoqModal(false);
  };
  const handleOpenAdmin = () => {
    setOpenAdmin(true);
  };

  const handleCloseAdmin = () => {
    setOpenAdmin(false);
  };

  const value = {
    createBoqModal,
    handleBoqPopup,
    handleCloseBOQ,

    
    openAdmin,
    handleOpenAdmin,
    handleCloseAdmin,
  };

  return (
    <AllModalContextP.Provider value={value}>
      {children}
    </AllModalContextP.Provider>
  );
}
