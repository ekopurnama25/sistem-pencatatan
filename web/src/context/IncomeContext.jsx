import React, { createContext, useState } from "react";
import axiosInstance from "../utils/ApiConfig";

const IncomeContext = createContext({});

export const IncomeProvider = ({ children }) => {
  const [income, setIncome] = useState([]);

  const getAllIncome = async () => {
    try {
      const Income = await axiosInstance.get("/income/");
      //console.log(Income);
      setIncome(Income);
      return Income;
    } catch (error) {
      console.log(error);
    }
  };

  const AddIncome = async (income) => {
    try {
      const incomeCreate = await axiosInstance.post("/income/", {
        date_of_entry: income.date_of_entry,
        income_statement: income.income_statement,
        source_of_income: income.source_of_income,
        income_amount: income.income_amount,
      });
      return incomeCreate;
    } catch (error) {
      console.log(error);
    }
  };

  let contextDataIncome = {
    income: income,
    setIncome: setIncome,
    getAllIncome,
    AddIncome,
  };

  return (
    <IncomeContext.Provider value={contextDataIncome}>
      {children}
    </IncomeContext.Provider>
  );
};

export default IncomeContext;
