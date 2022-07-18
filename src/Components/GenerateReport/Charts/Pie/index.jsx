import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import { colorScheme } from '../constants';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
  color: '#FFF',
  backgroundColor: '#00000090',
  borderRadius: 6,
  display: false
});

const PieChart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      ChartDataLabels,
      datalabels: {
        color: '#FFF',
        backgroundColor: '#00000090',
        borderRadius: 6,
        display: true
      },
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: props.title
      }
    }
  };

  const labels = props.data.map((item) => item[props.label]);

  const data = {
    labels,
    datasets: [
      {
        data: props.data.map((item) => item[props.value]),
        backgroundColor: colorScheme.corpo,
        borderColor: '#00000030'
      }
    ]
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
