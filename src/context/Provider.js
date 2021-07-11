import { useState, useReducer, useContext, createContext } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function Provider({ children }) {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
