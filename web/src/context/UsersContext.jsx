import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/ApiConfig";

const CheckUSersContext = createContext({});

export const CheckUSersProvider = ({ children }) => {
  const [checkUsers, setCheckUsers] = useState([]);
  console.log(checkUsers);
  const checkToken = async (data) => {
    try {
      const req = await axiosInstance.post("/auth/home/", data);
      console.log(req.data, "useer");
      setCheckUsers(req.data);
      //return req.data;
    } catch (error) {
      console.log(error);
    }
  };

  let contextData = {
    checkUsers: checkUsers,
    setCheckUsers: setCheckUsers,
    checkToken,
  };

  return (
    <CheckUSersContext.Provider value={contextData}>
      {children}
    </CheckUSersContext.Provider>
  );
};

export default CheckUSersContext;
