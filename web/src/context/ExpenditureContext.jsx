import React, { createContext, useState } from "react";
import axiosInstance from "../utils/ApiConfig";

const ExpenditureContext = createContext({});

export const ExpenditureProvider = ({ children }) => {
  const [expenditure, setExpenditure] = useState([]);
  const [expentureID, setIdExpenture] = useState();
  const [sumexpenture, setSumExpenture] = useState();

  const getAllExpenditure = async () => {
    try {
      const Expent = await axiosInstance.get("/expenditure/");
      //console.log(Income);
      setExpenditure(Expent?.data?.data);
      return Expent.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const AddExpenditure = async (expenture) => {
    try {
      const incomeCreate = await axiosInstance.post("/expenditure/", {
        out_date: expenture.out_date,
        expenditure_statement: expenture.expenditure_statement,
        source_expenditure: expenture.source_expenditure,
        expenditure_amount: expenture.expenditure_amount,
      });
      // const arr1 = [incomeCreate];
      // const arr2 = [incomeCreate?.data.data];
      // const result = incomeCreate.concat(incomeCreate?.data?.data);
      // setExpenditure(incomeCreate?.data?.data);
      //console.log(result);
      //console.log("create", [...incomeCreate]);
      return incomeCreate?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteDataExpenture = async (id) => {
    try {
      const req = await axiosInstance.delete(`/expenditure/${id}`);
      return req;
    } catch (error) {
      console.log(error);
    }
  };

  const getIdExpenture = async (id) => {
    try {
      const req = await axiosInstance.get(`/expenditure/${id}`);
      console.log(req);
      setIdExpenture(req.data.expenditure);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateExpenture = async (id, expenture) => {
    try {
      const req = await axiosInstance.put(`/expenditure/${id}`, {
        out_date: expenture.out_date,
        expenditure_statement: expenture.expenditure_statement,
        source_expenditure: expenture.source_expenditure,
        expenditure_amount: expenture.expenditure_amount,
      });
      console.log(req);
      //const { data } = req;
      return req.data;
    } catch (error) {
      console.log(error);
    }
  };

  const SumExpenditure = async () => {
    try {
      const req = await axiosInstance.get("/expenditure/totalexpenditure");
      console.log(req);
      //const { data } = req;
      setSumExpenture(req.data.data);
      return req.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  let contextDataExpenditure = {
    expenditure: expenditure,
    expentureID: expentureID,
    sumexpenture: sumexpenture,
    setSumExpenture: setSumExpenture,
    setIdExpenture: setIdExpenture,
    setExpenditure: setExpenditure,
    AddExpenditure,
    getAllExpenditure,
    DeleteDataExpenture,
    getIdExpenture,
    UpdateExpenture,
    SumExpenditure,
  };

  return (
    <ExpenditureContext.Provider value={contextDataExpenditure}>
      {children}
    </ExpenditureContext.Provider>
  );
};

export default ExpenditureContext;
