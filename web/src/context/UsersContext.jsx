import React, { createContext, useState } from "react";
import axiosInstance from "../utils/ApiConfig";

const CheckUsersContext = createContext({});

export const CheckUsersProvider = ({ children }) => {
  const [checkUsers, setCheckUsers] = useState([]);

  const checkToken = async (data) => {
    try {
      //console.log(data);
      const Token = await axiosInstance.post("/auth/home/", {
        accsesToken: data,
      });
      //console.log(Token);
      setCheckUsers(Token);
      return Token;
    } catch (error) {
      console.log(error);
    }
  };

  let contextDataUsers = {
    checkUsers: checkUsers,
    setCheckUsers: setCheckUsers,
    checkToken,
  };

  return (
    <CheckUsersContext.Provider value={contextDataUsers}>
      {children}
    </CheckUsersContext.Provider>
  );
};

export default CheckUsersContext;
