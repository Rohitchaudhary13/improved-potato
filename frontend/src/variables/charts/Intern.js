import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/notesActions";
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

function Intern(props, { history, search }, week) {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { notes } = noteList;

  const labels = [];
  useEffect(() => {
    const fetchSamplings = async () => {
      if (notes) {
        setChartData({
          labels: [...notes.map((val) => val.name)],
          datasets: [
            {
              label: "Students Score",
              borderWidth: 1.5,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderColor: "rgba(255,255,255,0.7)",
              hoverBackgroundColor: "rgba(0,0,0,0.8)",
              barThickness: "15",
              data: [
                ...notes.map(
                  (val) =>
                  parseInt(val[`w${props.week}intern`])                  
                ),
              ],
            },
          ],
        });
        setOptions({
          options: {
            responsive: true,
            scales: {
              y: {
                ticks: {
                  color: "gray",
                  beginAtZero: true,
                  stepSize: 1,
                  precision: 0,
                  font: {
                    weight: 'bold',
                    size: 18,
                  }      
                },
              },
              x: {
                ticks: {
                  color: "gray",
                  beginAtZero: true,
                  stepSize: 1,
                  precision: 0,
                  font: {
                    weight: 'bold',
                    size: 16,
                  }      
                },
              },
            },
          },
        });
      }
    };
    fetchSamplings();
  }, [notes]);

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [options, setOptions] = useState({
    datasets: [],
  });
  return (
    <>
      <Chart type={props.type} data={chartData} options={options.options} />
    </>
  );
}

export default Intern;
