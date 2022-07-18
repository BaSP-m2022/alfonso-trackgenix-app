import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { colorScheme } from '../constants';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: props.title
      }
    }
  };

  const labels = props.data.label.map((item) => item);

  const data = {
    labels,
    datasets: props.data.teamLabel.map((item) => {
      return {
        label: item,
        data: props.data.data[props.data.teamLabel.indexOf(item)].map((dataItem) => dataItem),
        backgroundColor: colorScheme[props.colorScheme][props.data.teamLabel.indexOf(item)],
        borderColor: colorScheme[props.colorScheme][props.data.teamLabel.indexOf(item)]
      };
    })
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
