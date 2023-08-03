import React, { createContext, useState } from "react";
import axiosInstance from "../utils/ApiConfig";

const IncomeContext = createContext({});

export const IncomeProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [incomeID, setIdIncome] = useState();
  const [sumincome, setSumIncome] = useState();
  const [resultkas, setResultKas] = useState();

  const getAllIncome = async () => {
    try {
      const Income = await axiosInstance.get("/income/");
      //console.log(Income);
      return Income.data.data;
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
      return [incomeCreate.data.data];
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

  const UpdateIncome = async (id, income) => {
    try {
      const req = await axiosInstance.put(`/income/${id}`, {
        date_of_entry: income.date_of_entry,
        income_statement: income.income_statement,
        source_of_income: income.source_of_income,
        income_amount: income.income_amount,
      });
      console.log(req);
      if (req) {
        req.id_income === id;
      }
      return req.data;
    } catch (error) {
      console.log(error);
    }
  };

  const SumIncome = async () => {
    try {
      const req = await axiosInstance.get("/income/totalincome");
      console.log(req.data.data);
      //const { data } = req;
      setSumIncome(req.data.data);
      return req.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const ResultKas = async () => {
    try {
      const req = await axiosInstance.get("/income/sisakas");
      console.log(req);
      //const { data } = req;
      setResultKas(req.data);
      return req.data;
    } catch (error) {
      console.log(error);
    }
  };

  let contextDataIncome = {
    income: income,
    incomeID: incomeID,
    sumincome: sumincome,
    resultkas: resultkas,
    setSumIncome: setSumIncome,
    setIncome: setIncome,
    setIdIncome: setIdIncome,
    setResultKas: setResultKas,
    getAllIncome,
    AddIncome,
    DeleteIncome,
    getIdIncome,
    UpdateIncome,
    SumIncome,
    ResultKas,
  };

  return (
    <IncomeContext.Provider value={contextDataIncome}>
      {children}
    </IncomeContext.Provider>
  );
};

export default IncomeContext;
