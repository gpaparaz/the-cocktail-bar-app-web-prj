import React, { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const { isLoading, data, isError, count } = useFetch(`s=${query}`);

  //stati e funzioni che gestiscono la sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

   //Cerca cocktail: Quando cambia Query, ho un nuovo rendere di useFetch
   const searchCocktail = (input) => {
    setQuery(input);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isLoading,
        isError,
        count,
        query,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
