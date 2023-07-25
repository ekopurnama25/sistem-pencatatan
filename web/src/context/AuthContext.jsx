import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/ApiConfig";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("Token");
    if (userData) {
      setAuthenticated(JSON.parse(userData));
    }
  }, []);

  //console.log(isAuthenticated, "auth ini");
  const login = async (modal) => {
    try {
      const req = await axiosInstance.post("/auth/", {
        email: modal.email,
        password: modal.password,
      });
      //console.log(req.data);
      localStorage.setItem("Token", JSON.stringify(req.data));
      setAuthenticated(req.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // Perform logout logic, e.g., making an API request
    setAuthenticated(false);
  };

  let contextData = {
    isAuthenticated: isAuthenticated,
    setAuthenticated: setAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
