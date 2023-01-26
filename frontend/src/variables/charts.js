import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../actions/notesActions";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function Graph(props, {history, search}) {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { notes } = noteList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;
  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successCreate,
    successUpdate,
  ]);
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
      if (notes) {
        setChartData({
          labels: [...notes.map((val) => val.name)],
          datasets: [
            {
              label: "Students Score",
              borderWidth: 1.5,
              backgroundColor: "rgba(255, 255, 255,0.3)",
              borderColor: "rgba(255,255,255,0.7)",
              hoverBackgroundColor: "rgba(255, 255, 255,0.1)",
              barThickness: "15",
              data: [
                ...notes.map(
                  (val) =>
                    parseInt(val.w1intro) +
                    parseInt(val.w1project) +
                    parseInt(val.w1skills) +
                    parseInt(val.w1extra) +
                    parseInt(val.w1intern) +
                    parseInt(val.w1profile) +
                    parseInt(val.w2intro) +
                    parseInt(val.w2project) +
                    parseInt(val.w2skills) +
                    parseInt(val.w2extra) +
                    parseInt(val.w2intern) +
                    parseInt(val.w2profile) +
                    parseInt(val.w3intro) +
                    parseInt(val.w3project) +
                    parseInt(val.w3skills) +
                    parseInt(val.w3extra) +
                    parseInt(val.w3intern) +
                    parseInt(val.w3profile) +
                    parseInt(val.w4intro) +
                    parseInt(val.w4project) +
                    parseInt(val.w4skills) +
                    parseInt(val.w4extra) +
                    parseInt(val.w4intern) +
                    parseInt(val.w4profile)
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
                  stepSize: 5,
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
                  stepSize: 5,
                  precision: 0,
                  font: {
                    weight: 'bold',
                    size: 15,
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

export default Graph;
