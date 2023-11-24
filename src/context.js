import React, { useState, useContext } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(false);
  const { isLoading, data, isError, count } = useFetch(`${query}`, type);

  //stati e funzioni che gestiscono la sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  //Cerca cocktail: Quando cambia Query, ho un nuovo rendere di useFetch
  const searchCocktail = (input, type) => {
    setQuery(input);
    setType(type);
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
        searchCocktail,
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
