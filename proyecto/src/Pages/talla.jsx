import React from 'react';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en 
import LinesChart from './LinesCharttalla';
//import '../estilos/graphs.css'; // Asegúrate de que esta ruta sea correcta

function talla() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        
        <div className="z-10 flex flex-col items-center space-y-6"> {/* Colocamos el texto y gráfico en columna */}
          <p className="text-2xl font-bold text-gray-800">Información de Crecimiento Infantil</p>

          <div className="w-full max-w-4xl"> {/* Limita el ancho del gráfico para mantenerlo centrado */}
            <LinesChart />
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4"> {/* Posicionando el botón en la esquina inferior derecha */}
          <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">
            Revisar gráficos
          </button>
        </div>
      </div>
    </div>
  );
}

export default talla;
