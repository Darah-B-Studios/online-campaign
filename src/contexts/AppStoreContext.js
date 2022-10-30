import { createContext, useContext, useEffect, useState } from "react";

export const AppStoreContext = createContext({});

export const AppStoreProvider = ({ children }) => {
  const [aggregate, setAggregate] = useState([]);
  const [profilesData, setProfilesData] = useState([]);

  const values = {
    aggregate,
    setAggregate,
    profilesData,
    setProfilesData,
  };

  useEffect(() => {}, [aggregate]);
  return (
    <AppStoreContext.Provider value={values}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => useContext(AppStoreContext);
