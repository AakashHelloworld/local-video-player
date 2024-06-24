"use client"
import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext({});

interface InitialState {
  file: any;}

const initialState: InitialState = {
  file: null,
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
