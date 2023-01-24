import React, { useState, useEffect }  from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import faker from 'faker';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


function Graph(props) {
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    useEffect(() => {
        const fetchSamplings = async () => {            
            setChartData({
                labels: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      fill: true,
                      borderColor: "#1f8ef1",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: "#1f8ef1",
                      pointBorderColor: "rgba(255,255,255,0)",
                      pointHoverBackgroundColor: "#1f8ef1",
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                      data: labels.map(() => faker.datatype.number({ min: -10, max: 100 }))
                    },
                    {
                        label: "dataset 2",
                        fill: true,
                        borderColor: "crimson",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "crimson",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "crimson",
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: labels.map(() => faker.datatype.number({ min: -10, max: 100 }))
                      }
                  ],
              });
        }
        fetchSamplings();        
    }, [])

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    return(
        <>
            <Chart type={props.type} data={chartData} />
        </>
    )
}

export default Graph;