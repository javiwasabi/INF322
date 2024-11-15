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

const labels = [
    "6", "7", "8", "9", "10", "11", "1 año", "1 año 1 mes", "1 año 2 meses", "1 año 3 meses", 
    "1 año 4 meses", "1 año 5 meses", "1 año 6 meses", "1 año 7 meses", "1 año 8 meses", 
    "1 año 9 meses", "1 año 10 meses", "1 año 11 meses", "2 años"
];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Sobrepeso alto/Desnutrición',
            data: [11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.3, 16.5, 16.7, 16.8, 17, 17.1, 17.2, 17.3],
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Sobrepeso/bajo peso',
            data: [9.5, 10, 10.3, 10.6, 11, 11.5, 12, 12.5, 13, 13.4, 13.8, 14.2, 14.5, 14.7, 15, 15.2, 15.5, 15.7, 16],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'IMC normal',
            data: [8, 8.4, 8.7, 9, 9.3, 9.7, 10, 10.3, 10.7, 11, 11.3, 11.5, 11.7, 12, 12.2, 12.5, 12.7, 12.8, 13],
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',  // Línea sin etiqueta
            data: [6.5, 7, 7.2, 7.5, 7.8, 8, 8.3, 8.6, 8.8, 9, 9.3, 9.5, 9.7, 9.9, 10, 10.2, 10.4, 10.5, 10.7],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',  // Línea sin etiqueta
            data: [5.8, 6, 6.2, 6.5, 6.7, 7, 7.3, 7.6, 7.8, 8, 8.3, 8.5, 8.7, 8.8, 9, 9.2, 9.3, 9.5, 9.6],
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Datos obtenidos de su hijo/a',
            data: [8.1, 8.5, 8.6, 9.1, 9.4, 9.6, 10.1, 10.2, 10.8, 11.1, 11.2, 11.6, 11.8, 12.1, 12.3, 12.4, 12.6, 12.9, 13.1],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
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
                text: 'IMC'
            },
            min: 5,
            max: 18,
            ticks: {
                stepSize: 1
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            }
        },
        x: {
            title: {
                display: true,
                text: 'Edad (en meses en años)'
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
            display: true,
            labels: {
                filter: function(legendItem) {
                    // Filtra las líneas sin etiquetas
                    return legendItem.text !== '';
                }
            }
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
