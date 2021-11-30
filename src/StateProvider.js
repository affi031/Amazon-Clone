import React, { createContext, useReducer , useContext } from "react";

//Prepares the DataLayer
export const StateContext = createContext();

//Wrap our App and provide the Data Layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from Data Layer
export const useStateValue = () => useContext(StateContext)