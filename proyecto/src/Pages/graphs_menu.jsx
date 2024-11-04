import React from 'react';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula
import '../estilos/graphs.css'; // Asegúrate de que esta ruta sea correcta



function GraphsMenu() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        <div className="z-10 text-center space-y-6">
          <div className="text-2xl font-bold text-gray-800">
            <p>Your baby</p>
            <p>Child growth</p>
          </div>
          <p className="text-gray-500">Revise los gráficos y tablas de normalidad de su hijo/a</p>

          <div className="button-container"> {/* Clase para aplicar estilos de CSS */}
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700"> IMC <br /> (Índice de masa corporal)</button>
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">Talla para la edad</button>
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">Peso para la edad</button>
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">Perímetro cefálico para la edad</button>
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">Peso para la talla</button>
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">Longitud para la edad</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphsMenu;

