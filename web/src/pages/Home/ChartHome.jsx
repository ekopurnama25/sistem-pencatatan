import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, PointElement, LinearScale, Title);

export default function ChartDataHome() {
  const chartData = {
    labels: [
      "Januari",
      "Febuari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],

    datasets: [
      {
        label: "369",
        data: [3, 2, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};
  return (
    <>
      <Line style={{ padding: 10, width: 20, height: 800 }} data={chartData} />
    </>
  );
}
