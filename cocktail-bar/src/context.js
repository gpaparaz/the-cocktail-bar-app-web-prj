import React, {useState, useContext, createContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}