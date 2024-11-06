import React from 'react';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en 
import Tabla from '../Components/tabla.png';
// import '../estilos/graphs.css'; // Asegúrate de que esta ruta sea correcta
import { Link } from 'react-router-dom';

function Longitud() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        
        <div className="z-10 flex flex-col items-center space-y-6"> {/* Colocamos el texto y tabla en columna */}
          <p className="text-2xl font-bold text-gray-800 text-center">Según los datos proporcionados sobre su hijo/a</p>
          <p className="text-base font-bold text-gray-800 text-center">Normalidad de niños entre el nacimiento y 2 años de vida</p>

          <div className="w-full max-w-4xl"> {/* Limita el ancho de la tabla para mantenerla centrada */}
            <img src={Tabla} alt="Tabla de datos" className="w-full h-auto" />
          </div>
          <p className="text-base font-bold text-gray-800">Su hijo se encuentra en el sector: x</p>
          <p className="text-base font-bold text-gray-800">Indica: normalidad/anormalidad</p>
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

export default Longitud;
