import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { colorScheme } from '../constants';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(props) {
  const options = {
    plugins: {
      datalabels: {
        display: false
      },
      title: {
        display: true,
        text: props.title
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
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
        backgroundColor: colorScheme[props.colorScheme][props.data.teamLabel.indexOf(item)]
      };
    })
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
