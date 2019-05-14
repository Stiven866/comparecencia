import React from 'react';
import { Line } from "react-chartjs-2";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const themes = {
    classic: {
      primary: "#47bac1",
      secondary: "#a180da",
      tertiary: "#5fc27e",
      success: "#5fc27e",
      info: "#5b7dff",
      warning: "#fcc100",
      danger: "#f44455"
    },
    corporate: {
      primary: "#3086ff",
      secondary: "#495057",
      tertiary: "#0069fc",
      success: "#4bbf73",
      info: "#1f9bcf",
      warning: "#f0ad4e",
      danger: "#d9534f"
    },
    modern: {
      primary: "#2c7be5",
      secondary: "#9d7bd8",
      tertiary: "#5997eb",
      success: "#4caf50",
      info: "#47bac1",
      warning: "#ff9800",
      danger: "#e51c23"
    }
};

const theme = themes.classic;

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.primary,
        data: [
          2115,
          1562,
          1584,
          1892,
          1487,
          2223,
          2966,
          2448,
          2905,
          3838,
          2917,
          3327
        ]
      },
      {
        label: "Orders",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.tertiary,
        borderDash: [4, 4],
        data: [
          958,
          724,
          629,
          883,
          915,
          1214,
          1476,
          1212,
          1554,
          2128,
          1466,
          1827
        ]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false
    },
    hover: {
      intersect: true
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff"
          }
        }
      ]
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Line Chart</CardTitle>
        <h6 className="card-subtitle text-muted">
          A line chart is a way of plotting data points on a line.
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Line data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default LineChart;