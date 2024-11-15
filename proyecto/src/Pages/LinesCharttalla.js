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

// Labels del eje X en meses desde 0 hasta 24 meses (2 años)
const labels = [
    "0", "2", "4", "6", "8", "10", 
    "12", "14", "16", "18", "20", 
    "22", "24"
];

// Datos ajustados para simular curvas con la forma deseada
const data = {
    labels: labels,
    datasets: [
        {
            label: '97th',
            data: [55, 57, 60, 65, 70, 75, 80, 85, 88, 90, 92, 94, 95],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.2,  // Suaviza la curva
            labelText: 'Talla muy alta/muy baja',
        },
        {
            label: '85th',
            data: [50, 52, 55, 60, 65, 70, 75, 80, 83, 86, 88, 90, 90],
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            fill: false,
            tension: 0.2,
            labelText: 'Talla alta/baja',
        },
        {
            label: '50th',
            data: [50, 52, 54, 57, 60, 64, 68, 72, 76, 80, 83, 85, 88],
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: false,
            tension: 0.2,
            labelText: 'Talla promedio',
        },
        {
            label: 'Blue Line',
            data: [52, 54, 56, 59, 63, 67, 71, 75, 79, 82, 85, 87, 88],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: false,
            tension: 0.2,
            labelText: 'Talla de su hijo/a a través del tiempo',
        },
        {
            label: '15th',
            data: [45, 47, 50, 54, 58, 62, 66, 70, 74, 78, 82, 84, 86],
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            fill: false,
            tension: 0.2,
            // Desactivado para no mostrar la leyenda
            display: false,
        },
        {
            label: '3rd',
            data: [45, 46, 48, 50, 53, 55, 58, 60, 62, 65, 68, 70, 72],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.2,
            // Desactivado para no mostrar la leyenda
            display: false,
        },
    ],
};

const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Longitud (cm)'
            },
            min: 45,
            max: 95,
            ticks: {
                stepSize: 5
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            }
        },
        x: {
            title: {
                display: true,
                text: 'Edad (en meses)'
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
                maxRotation: 0,  // No rotar etiquetas del eje X
                autoSkip: false,  // Mostrar todas las etiquetas
            }
        }
    },
    plugins: {
        legend: {
            display: true,  // Activamos la leyenda
            labels: {
                generateLabels: (chart) => {
                    return chart.data.datasets
                        .filter((dataset) => dataset.display !== false)  // Filtramos las que tienen display en false
                        .map((dataset, index) => {
                            return {
                                text: dataset.labelText || dataset.label,
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
