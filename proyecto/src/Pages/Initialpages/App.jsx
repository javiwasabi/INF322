import React, { useEffect, useState } from 'react';

import BackgroundBubbles from '../../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula
import { CustomButton } from '../../Components/buttons';
import { PrevButton, NextButto } from '../../Components/buttons';

import { NavMenu} from '../../Components/MenuComponentes';

function App() {
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
    <div className="relative h-screen overflow-hidden bg-gray-50">
      <BackgroundBubbles />

      {/* Sección de encabezado y rectángulos - Ocupa el primer 33% */}
      <div className="h-1/3 flex flex-col items-center justify-center relative">
        <div 
          className="absolute top-10 items-center justify-center text-center h-[65%] w-[65%] bg-yellow-400 rounded-xl shadow-lg z-10"
          style={{ transform: 'rotate(-5deg)' }}
        >
          <div className="items-center justify-center text-center w-8 h-8 bg-white rounded-full" style={{ transform: 'rotate(+5deg)' }}></div>
          <div className="text-3xl font-merriweatherBold text-gray-800 mt-10">
            <p>Bienvenida/o usuario</p>
          </div>
        </div>
        <div 
          className="absolute top-6 items-center justify-center left-[7%] h-[65%] w-[67%] bg-orange-300 rounded-xl z-0"
          style={{ transform: 'rotate(-5deg)' }}
        ></div>
      </div>

      <div className=''>
      <div className="h-1/3 flex flex-col items-center w-full pt-10">
        {/* Título arriba de los botones */}
        <h2 className="text-center text-gray-700 font-semibold text-lg mb-6 z-30 md:text-xl">
          ¿En qué te podemos ayudar hoy?
        </h2>


        <div className=" w-[30%] flex justify-end pr-6 mb-4">
  <CustomButton label="Actualizar datos manualmente" target="/cambios" />
</div>


        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-11 w-full  max-w-md mx-auto p-6 ">
          <NavMenu className="w-full h-full" label="Los Seis hitos de desarrollo motor" target="/hitos-desarrollo" />
          <NavMenu className="w-full h-full" label="Graficos y tablas de normalidad" target="/graficos-tablas" />
          <NavMenu className="w-full h-full" label="Ayuda ante dudas" target="/foro" />
          <NavMenu className="w-full h-full" label="Ver sesiones anteriores" target="/sesiones-anteriores" />
        </div>



      </div>
      
      </div>
   
    </div>
  );
}


export default App;
