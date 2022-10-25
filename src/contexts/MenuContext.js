import { createContext, useContext, useState } from "react";
import { ROUTES } from "../routes";

export const MenuContext = createContext("home");

export const MenuProvider = ({ children }) => {
  const [currentMenu, setCurrentMenu] = useState(ROUTES.HOME);
  const values = {
    currentMenu,
    setCurrentMenu,
  };
  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => useContext(MenuContext);
