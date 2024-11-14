import React, { useEffect, useState } from 'react';
import Buscador from '../Components/buscador';
import Navbar from '../Components/navbar';
import Autos from '../Components/autos';
import Catalogos from '../Components/catalogo';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula
import './Consultas-anteriores.css';
import { PrevButton } from '../Components/buttons';

function App3() {
    const [activePopup, setActivePopup] = useState(null);

  const handleOpenPopup = (popupIndex) => {
    setActivePopup(popupIndex);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles /> {/* Usa BackgroundBubbles en lugar de backgroundBubbles */}
        <div className="z-10 text-center space-y-6">
          <div className="text-2xl font-bold text-gray-800">
          <div className="button-container">
                {[1, 2, 3, 4].map((index) => (
                <button 
                    key= {index} 
                    className="curved-button" 
                    onClick={() => handleOpenPopup(index)}
                >
                    Consulta {index}
                </button>
                ))}
            </div>

            {/* Pop-up modal */}
            {activePopup && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <h2> 17/10/2024 </h2>
                    <p>-Temperatura normal.</p>
                    <p>-Coloración normal.</p>
                    <p>-Presión normal.</p>
                    <p>-Capacidad pulmonar conservada.</p>
                    <p>-Próxima consulta en un mes.</p>
                    <button className="close-button" onClick={handleClosePopup}>Cerrar</button>
                </div>
                </div>
            )}
          </div>

          <PrevButton label="Atrás" target="/" />
         
        </div>
      </div>
    </div>
  );
}

export default App3;
