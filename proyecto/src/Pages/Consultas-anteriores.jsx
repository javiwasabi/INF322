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
                <BackgroundBubbles />

                <div className="z-10 flex flex-col items-center justify-center space-y-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Consultas Anteriores
                    </h1>

                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((index) => (
                            <button
                                key={index}
                                className="curved-button px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                                onClick={() => handleOpenPopup(index)}
                            >
                                Consulta {index}
                            </button>
                        ))}
                    </div>

                    {activePopup && (
                        <div className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                            <div className="popup-content bg-white p-6 rounded-lg shadow-lg relative max-w-md mx-auto">
                                <h2 className="text-xl font-semibold mb-4">Consulta {activePopup}</h2>
                                <p>- Temperatura normal.</p>
                                <p>- Coloración normal.</p>
                                <p>- Presión normal.</p>
                                <p>- Capacidad pulmonar conservada.</p>
                                <p>- Próxima consulta en un mes.</p>
                                <button
                                    className="close-button mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                                    onClick={handleClosePopup}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    )}

                    <PrevButton label="Atrás" target="/" />
                </div>
            </div>
        </div>
    );
}

export default App3;

