import React from 'react';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en 
import LinesChart from './LinesChartpedad';
//import '../estilos/graphs.css'; // Asegúrate de que esta ruta sea correcta
import { Link } from 'react-router-dom';

function peso_edad() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        
        <div className="z-10 flex flex-col items-center space-y-6"> {/* Colocamos el texto y gráfico en columna */}
          <p className="text-2xl font-bold text-gray-800 text-center-xs">Según los datos proporcionados sobre su hijo/a</p>
          <p className="text-base font-bold text-gray-800 text-center-xs">Normalidad de niños entre el nacimiento y 2 años de vida</p>

          <div className="w-full max-w-4xl"> {/* Limita el ancho del gráfico para mantenerlo centrado */}
            <LinesChart />
          </div>
          <p className="text-base font-bold text-gray-8  00">Su hijo se encuentra en el sector: x</p>
          <p className="text-base font-bold text-gray-8  00">Indica: normalidad/anormalidad</p>
        </div>
        
        <div className="absolute bottom-4 right-4"> {/* Posicionando el botón en la esquina inferior derecha */}
          <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">
            <Link to="/graphs">Devolverse</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default peso_edad;
