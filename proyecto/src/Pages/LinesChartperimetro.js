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

// Labels del eje X, desde los 6 meses hasta los 2 años
const labels = [
    "6", "7", "8", "9", "10", "11", "1 año", "1 año 1 mes", "1 año 2 meses", "1 año 3 meses", 
    "1 año 4 meses", "1 año 5 meses", "1 año 6 meses", "1 año 7 meses", "1 año 8 meses", 
    "1 año 9 meses", "1 año 10 meses", "1 año 11 meses", "2 años"
];

// Datos ajustados para simular una curva que sube rápidamente al principio y luego se estabiliza
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Línea negra: Aumento excepcional/insuficiente',
            data: [38, 40, 42, 43.5, 45, 46, 46.5, 47, 47.5, 47.8, 48.1, 48.3, 48.5, 48.6, 48.7, 48.8, 48.9, 49, 49],
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Línea roja: Aumento moderado/retrasado',
            data: [37, 39, 40.5, 42, 43.3, 44.2, 44.8, 45.3, 45.7, 46, 46.3, 46.5, 46.6, 46.7, 46.8, 46.9, 47, 47, 47],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Línea amarilla: Aumento ligero/lento',
            data: [36, 37.8, 39.2, 40.5, 41.6, 42.4, 43, 43.5, 43.9, 44.2, 44.4, 44.6, 44.7, 44.8, 44.9, 45, 45, 45, 45.1],
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Línea verde: Aumento promedio',
            data: [34.5, 36.2, 37.5, 38.7, 39.7, 40.5, 41, 41.5, 41.9, 42.2, 42.4, 42.6, 42.7, 42.8, 42.9, 43, 43, 43, 43],
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Línea azul: Aumento de perímetro cefálico a través del tiempo de su hijo/a',
            data: [33.5, 35.2, 37.5, 38.9, 40.3, 40.8, 41.5, 41.8, 42, 42.2, 42.4, 42.6, 42.7, 42.8, 42.9, 43, 43.3, 43.5, 43.7],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Otra línea amarilla',
            data: [33.2, 35, 36.2, 37.3, 38.3, 39.1, 39.7, 40.2, 40.5, 40.8, 41, 41.2, 41.3, 41.4, 41.5, 41.6, 41.7, 41.8, 41.8],
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            fill: false,
            display: false,
            tension: 0.4,
        },
        {
            label: 'Otra línea roja',
            data: [32, 33.8, 35, 36.2, 37.1, 37.8, 38.3, 38.7, 39, 39.2, 39.4, 39.5, 39.6, 39.7, 39.8, 39.9, 40, 40, 40],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            display: false,
            tension: 0.4,
        },
        {
            label: 'Otra línea negra (inferior)',
            data: [30.6, 32.2, 33.5, 34.5, 35.3, 36, 36.5, 37, 37.3, 37.5, 37.7, 37.8, 37.9, 38, 38.1, 38.2, 38.3, 38.3, 38.3],
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            display: false,
            tension: 0.4,
        },
    ],
};

const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Perímetro Cefálico (cm)',
            },
            min: 30,
            max: 50,
            ticks: {
                stepSize: 2,
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
        },
        x: {
            title: {
                display: true,
                text: 'Edad (en meses y años)',
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
                maxRotation: 45,
            },
        },
    },
    plugins: {
        legend: {
            display: true,  // Mostrar leyenda
            labels: {
                generateLabels: (chart) => {
                    return chart.data.datasets
                        .filter((dataset) => dataset.display !== false)  // Filtrar las que tienen display en false
                        .map((dataset, index) => {
                            return {
                                text: dataset.label,
                                fillStyle: dataset.borderColor,
                                strokeStyle: dataset.borderColor,
                                lineWidth: 3,
                                index,
                            };
                        });
                },
            },
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
