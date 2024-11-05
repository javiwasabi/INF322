import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

// Labels del eje X (meses)
const labels = Array.from({ length: 12 }, (_, i) => i * 2);

// Datos ajustados para simular una curva que sube suavemente con forma exponencial
const data = {
    labels: labels,
    datasets: [
        {
            label: '',
            data: [3.4, 4.2, 5.5, 7.2, 9.1, 11.5, 14.3, 17.1, 19.2, 21.1, 22.8, 24],  // Línea negra (superior)
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [3, 3.7, 4.9, 6.3, 8, 10.1, 12.4, 15.1, 17, 18.7, 20.5, 22],  // Línea roja
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [2.7, 3.3, 4.4, 5.8, 7.4, 9.3, 11, 13, 15, 16.5, 18.2, 20],  // Línea amarilla
            borderColor: 'yellow',
            backgroundColor: 'rgba(255, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [2.5, 3, 4, 5.3, 6.7, 8.4, 10, 11.8, 13.5, 15, 16.7, 18.2],  // Línea verde
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [2.3, 2.8, 3.7, 4.9, 6.3, 7.8, 9.3, 11, 12.6, 14, 15.2, 16.8],  // Otra línea amarilla
            borderColor: 'yellow',
            backgroundColor: 'rgba(255, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [2.2, 2.6, 3.5, 4.7, 5.9, 7.4, 8.7, 10.2, 11.7, 13, 14.2, 15.4],  // Otra línea roja
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [1.9, 2.4, 3.3, 4.2, 5.4, 6.6, 7.8, 9.2, 10.4, 11.6, 12.9, 14.3],  // Otra línea negra (inferior)
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
    ],
};

const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Peso (kg)'
            },
            min: 0,
            max: 24,
            ticks: {
                stepSize: 2
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            }
        },
        x: {
            title: {
                display: true,
                text: 'Edad (meses)'
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
                maxRotation: 45,
            }
        }
    },
    plugins: {
        legend: {
            display: false,  // No mostrar leyenda
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    maintainAspectRatio: false,
};

export default function LinesChart() {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Line data={data} options={options} />
        </div>
    );
}
