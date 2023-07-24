import React, { createContext, useState } from "react";
import axiosInstance from "../utils/ApiConfig";

const IncomeContext = createContext({});

export const IncomeProvider = ({ children }) => {
  const [income, setIncome] = useState([]);

  const getAllIncome = async () => {
    try {
      const Income = await axiosInstance.get("/income/");
      console.log(Income);
      setIncome(Income);
      return Income;
    } catch (error) {
      console.log(error);
    }
  };

  let contextDataIncome = {
    income: income,
    setIncome: setIncome,
    getAllIncome,
  };

  return (
    <IncomeContext.Provider value={contextDataIncome}>
      {children}
    </IncomeContext.Provider>
  );
};

export default IncomeContext;
