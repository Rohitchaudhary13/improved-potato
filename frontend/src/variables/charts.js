import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import faker from "faker";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function Graph(props) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  useEffect(() => {
    const fetchSamplings = async () => {
      setChartData({
        labels: [
          "Student 1",
          "Student 2",
          "Student 3",
          "Student 4",
          "Student 5",
          "Student 6",
          "Student 7",
          "Student 8",
          "Student 9",
          "Student 10",
          "Student 11",
          "Student 12",
          "Student 13",
          "Student 14",
          "Student 15",
          "Student 16",
          "Student 17",
          "Student 18",
          "Student 19",
          "Student 20",
        ],
        datasets: [
          {
            label: "Students Score",
            borderWidth: 1.5,
            backgroundColor: "rgba(255, 255, 255,0.3)",
            borderColor: "rgba(255,255,255,0.7)",
            hoverBackgroundColor: "rgba(255, 255, 255,0.1)",
            barThickness: "15",
            data: [1, 2, 3, 1, 2, 4, 5, 1, 2, 3, 2, 4, 5, 2, 3, 5, 2, 1, 2, 5],
          },
        ],        
      });
    };
    fetchSamplings();
  }, []);

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  return (
    <>
      <Chart type={props.type} data={chartData} />
    </>
  );
}

export default Graph;
