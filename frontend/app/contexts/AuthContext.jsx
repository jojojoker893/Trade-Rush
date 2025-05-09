'use client'

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  useEffect(()=> {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken)
  }, [] );

  const isLoggedIn = !!token;

  return(
    <AuthContext.Provider value={{token, setToken, isLoggedIn}}>
      { children }
    </AuthContext.Provider>
  );
};

