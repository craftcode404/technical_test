import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import './App.css';

function LineChart({ rawData, title }) {

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: ""
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = rawData? Object.keys(rawData) : [];

  let prevalence = [];
  let variance = [];
  labels.forEach((e) => {
    prevalence.push(rawData[e]["prevalence"]);
    variance.push(rawData[e]["variance"]);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "FCS prevalence",
        data: prevalence,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "FCS variance",
        data: variance,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };



  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
}


export default LineChart;