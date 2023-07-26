import React, { createContext, useState } from "react";
import axiosInstance from "../utils/ApiConfig";

const IncomeContext = createContext({});

export const IncomeProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [incomeID, setIdIncome] = useState();

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

  const DeleteIncome = async (id) => {
    try {
      const req = await axiosInstance.delete(`/income/${id}`);
      return req;
    } catch (error) {
      console.log(error);
    }
  };

  const getIdIncome = async (id) => {
    try {
      const req = await axiosInstance.get(`/income/${id}`);
      setIdIncome(req.data.income);
    } catch (error) {
      console.log(error);
    }
  };

  let contextDataIncome = {
    income: income,
    incomeID: incomeID,
    setIncome: setIncome,
    setIdIncome: setIdIncome,
    getAllIncome,
    AddIncome,
    DeleteIncome,
    getIdIncome,
  };

  return (
    <IncomeContext.Provider value={contextDataIncome}>
      {children}
    </IncomeContext.Provider>
  );
};

export default IncomeContext;
