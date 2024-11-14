import React, { useEffect, useState } from 'react';

import BackgroundBubbles from '../../src/Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula

import { PrevButton, NextButton } from '../Components/buttons';

import { Link } from 'react-router-dom';


function Foro() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  // Define handleBack y handleNext fuera de useEffect
  const handleBack = () => alert('Volver a la página anterior');
  const handleNext = () => alert('Ir a la siguiente página');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        
        <div className="z-10 text-center space-y-6">
          <div className="text-5xl font-merriweatherBold text-gray-800">
            <p>Foro</p>
       
          </div>
          
          <div className='mt-[10%] p-10 flex flex-col text-left'>
      <h2 className="text-xl ont-merriweatherBold  text-gray-800 mb-6">¿Qué te interesa ver?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg text-gray-700">Crecimiento Infantil</h3>
          <Link to="/growth-parameters" className="block text-gray-600 text-sm font-poppins md:text-s mt-2 hover:text-blue-500 transition duration-300">
            ¿Cuáles son los parámetros de crecimiento de un niño?
          </Link>
          <Link to="/weight-progress" className="block text-gray-600 text-sm font-poppins md:text-s mt-2 hover:text-blue-500 transition duration-300">
            ¿Cómo puedo ver el progreso del peso de mi hijo en el sistema?
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg text-gray-700">Artículos Recomendados</h3>
          <Link to="/recommended-articles" className="block text-gray-600 text-sm font-poppins md:text-s mt-2 hover:text-blue-500 transition duration-300">
            ¿Cuáles artículos son recomendables?
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg text-gray-700">Desarrollo Infantil</h3>
          <Link to="/expected-development" className="block text-gray-600 text-sm font-poppins md:text-s mt-2 hover:text-blue-500 transition duration-300">
            ¿Cómo sé si mi hijo está dentro del desarrollo esperado?
          </Link>
          <Link to="/development-comparison" className="block text-gray-600 text-sm font-poppins md:text-s mt-2 hover:text-blue-500 transition duration-300">
            ¿Puedo comparar el desarrollo de mi hijo con otros niños?
          </Link>
        </div>
      </div>
    </div>
          <PrevButton label="Atrás" target="/" />


          
        </div>
      </div>
    </div>
  );
}


export default Foro;
