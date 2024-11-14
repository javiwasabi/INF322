import React, { useEffect, useState } from 'react';
import BackgroundBubbles from '../../src/Components/backgroundBubbles';
import { PrevButton, NextButton } from '../Components/buttons';
import { Link } from 'react-router-dom';

function Cambios() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleBack = () => alert('Volver a la página anterior');
  const handleNext = () => alert('Ir a la siguiente página');

  // Estados para almacenar los valores ingresados
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarBackground(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        <div className="z-10 text-center space-y-6">
          <div className="text-5xl font-merriweatherBold text-gray-800">
            <p>Registra los cambios que ha tenido tu hija/o</p>
          </div>

          <div className="mt-[10%] p-10 flex flex-col text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg text-gray-700">Peso corporal (kg)</h3>
                <input
                  type="text"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  placeholder="Ingrese el peso en kg"
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg text-gray-700">Estatura (cm)</h3>
                <input
                  type="text"
                  value={estatura}
                  onChange={(e) => setEstatura(e.target.value)}
                  placeholder="Ingrese la estatura en cm"
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg text-gray-700">Edad (meses)</h3>
                <input
                  type="text"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  placeholder="Ingrese la edad en meses"
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
            </div>

            {/* Bloques que muestran los valores ingresados con unidades */}
            <div className="mt-6 space-y-4">
              {peso && (
                <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                  <p className="text-lg font-semibold text-gray-700">Peso corporal:</p>
                  <p className="text-gray-600">{peso} kg</p>
                </div>
              )}
              {estatura && (
                <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                  <p className="text-lg font-semibold text-gray-700">Estatura:</p>
                  <p className="text-gray-600">{estatura} cm</p>
                </div>
              )}
              {edad && (
                <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                  <p className="text-lg font-semibold text-gray-700">Edad:</p>
                  <p className="text-gray-600">{edad} meses</p>
                </div>
              )}
            </div>
          </div>

          <PrevButton label="Atras" target="/" />
        </div>
      </div>
    </div>
  );
}

export default Cambios;
