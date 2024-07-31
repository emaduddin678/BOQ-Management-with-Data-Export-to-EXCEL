import React, { useContext, useEffect, useState } from "react";


const AllModalContextP = React.createContext();

export function useAllModalContext() {
  return useContext(AllModalContextP);
}

// const user = useAuth();

export function AllModalContext({ children }) {
   const [createBoqModal, setCreateBoqModal] = useState(false); 

  const handleBoqPopup = () => {

    setCreateBoqModal(true);
  };

    const handleCloseBOQ = () => {
   
      setCreateBoqModal(false);
    };

  const value = {
    createBoqModal,
    handleBoqPopup,
    handleCloseBOQ,
  };

  return (
    <AllModalContextP.Provider value={value}>
      {children}
    </AllModalContextP.Provider>
  );
}
