import React, { useEffect, useState } from 'react';

import BackgroundBubbles from '../../src/Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula

import { PrevButton, NextButton } from '../Components/buttons';

import { Link } from 'react-router-dom';


function Cambios() {
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
            <p>Registra los cambios que ha tenido tu hija/o</p>
       
          </div>
          
          <div className='mt-[10%] p-10 flex flex-col text-left'>
    
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg text-gray-700">Peso corporal</h3>
         
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg text-gray-700">Estatura</h3>
          
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg text-gray-700">Edad</h3>
          
        </div>
      </div>
    </div>
          <PrevButton label="Devolverse" target="/" />
          <NextButton label="Siguiente" target="/aboutyou1" />

          
        </div>
      </div>
    </div>
  );
}


export default Cambios;