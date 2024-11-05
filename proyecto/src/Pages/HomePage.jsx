import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-4">
  
      <div className="relative w-72 h-24 bg-yellow-400 rounded-lg shadow-lg">
        <div className="absolute w-72 h-24 -top-2 -left-2 bg-orange-300 rounded-lg"></div>
        <div className="absolute w-6 h-6 bg-white rounded-full top-4 left-4"></div>
        <div className="flex justify-center items-center h-full">
          <span className="bg-white py-1 px-4 rounded-full font-semibold text-gray-700">
            Bienvenida Maca
          </span>
        </div>
      </div>

      <h2 className="mt-8 text-center text-gray-700 font-semibold text-lg">
        ¿En qué te podemos ayudar hoy sobre Santi?
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-8 w-80">
        <button className="flex items-center justify-center p-4 bg-yellow-400 rounded-lg shadow-md">
          <div className="bg-green-200 w-full h-full flex items-center justify-center rounded-lg text-center text-gray-700 font-medium text-sm px-2">
            Los Seis hitos de desarrollo motor
          </div>
        </button>
        <button className="flex items-center justify-center p-4 bg-yellow-400 rounded-lg shadow-md">
          <div className="bg-green-200 w-full h-full flex items-center justify-center rounded-lg text-center text-gray-700 font-medium text-sm px-2">
            Graficos y tablas de normalidad
          </div>
        </button>
        <button className="flex items-center justify-center p-4 bg-yellow-400 rounded-lg shadow-md">
          <div className="bg-green-200 w-full h-full flex items-center justify-center rounded-lg text-center text-gray-700 font-medium text-sm px-2">
            Ayuda ante dudas
          </div>
</button>
        <button className="flex items-center justify-center p-4 bg-yellow-400 rounded-lg shadow-md">
          <div className="bg-green-200 w-full h-full flex items-center justify-center rounded-lg text-center text-gray-700 font-medium text-sm px-2">
            Ver sesiones anteriores
          </div>
        </button>
        <button className="col-span-2 flex items-center justify-center p-4 bg-yellow-400 rounded-lg shadow-md">
          <span className="text-gray-700 font-medium text-sm">Actualizar datos manualmente</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
