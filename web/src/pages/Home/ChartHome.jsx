import React, { useContext, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

import IncomeContext from "../../context/IncomeContext";
ChartJS.register(LineElement, CategoryScale, PointElement, LinearScale, Title);

export default function ChartDataHome() {
  const { income, setIncome, getAllIncome, DeleteIncome } =
    useContext(IncomeContext);

  useEffect(() => {
    const getIncome = async () => {
      const res = await getAllIncome();
      console.log(res);
      setIncome(res);
    };

    getIncome();
  }, []);
  console.log(income?.map((i) => i?.date_of_entry));

  // const mapIncome =
  //   income &&
  //   income.map((value, i) => {
  //     return (
  //       <>
  //         <div key={i}></div>
  //         <div>{value?.income_amount}</div>
  //       </>
  //     );
  //   });
  const datas = [];

  // const map = income.map((x) => {
  //   return x.income_amount;
  // });

  console.log("in");
  const chartData = {
    labels: income?.map((i) => i?.date_of_entry),

    datasets: [
      {
        label: income?.map((i) => i?.date_of_entry),
        data: income?.map((i) => i?.income_amount),
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const options = {};
  return (
    <>
      <Line
        style={{ padding: "20px", widht: "100", height: "50%" }}
        data={chartData}
      />
    </>
  );
}
