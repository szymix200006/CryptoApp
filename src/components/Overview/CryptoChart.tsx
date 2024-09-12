import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Price in the last 30 days ($)',
    },
  },
};

type CryptoChartProps = {
  prices: number[];
  days: string[];
}

export default function CryptoChart({prices, days}: CryptoChartProps) {
  return (
    <div className="crypto-chart-container">
      <Line options={options} data={{
        labels: days,
        datasets: [
          {
            data: prices,
            borderColor: 'rgb(197, 19, 197)',
            backgroundColor: 'rgb(199, 115, 199)'
          }
        ]
      }}/>
    </div>
  )
}
