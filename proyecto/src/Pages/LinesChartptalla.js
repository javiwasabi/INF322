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

// Nuevas etiquetas para el eje X (longitud en cm) con saltos de 10 cm
const labels = [45, 55, 65, 75, 85, 95, 105];

// Datos ajustados para simular una curva que sube suavemente con forma exponencial
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Aumento acelerado/deficiente',
            data: [3.4, 6.2, 10.5, 13.2, 16.1, 20.5, 24],  // Línea negra (superior)
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Aumento moderado/inferior',
            data: [3.2, 4.5, 8.3, 11.2, 14.1, 18.5, 22],  // Línea roja
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Aumento ligero/bajo',
            data: [2.7, 4, 7.3, 10.2, 13.1, 16.5, 20],  // Línea amarilla
            borderColor: 'yellow',
            backgroundColor: 'rgba(255, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: 'Aumento estándar',
            data: [2.5, 3.6, 6.3, 8.2, 11.1, 14.5, 19],  // Línea verde
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [2.3, 3.2, 4.5, 6.5, 8.7, 12.3, 17],  // Otra línea amarilla
            borderColor: 'yellow',
            backgroundColor: 'rgba(255, 255, 0, 0.1)',
            fill: false,
            display: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [2.1, 3, 4.3, 6, 8, 11.8, 15],  // Otra línea roja
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: false,
            display: false,
            tension: 0.4,
        },
        {
            label: '',
            data: [1.9, 2.5, 3.9, 5, 6.5, 9.5, 13],  // Otra línea negra (inferior)
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
            display: false,
            tension: 0.4,
        },
        {
            label: 'Aumento de peso en función de la talla de su hijo/a',
            data: [2.5, 3.4, 6, 8, 10.7, 14.3, 18.7],  // Línea azul (nueva)
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
                text: 'Peso (kg)',
            },
            min: 0,
            max: 24,
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
                text: 'Longitud (cm)',
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
                maxRotation: 45,
                stepSize: 10, // Cambio a 10 cm
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
