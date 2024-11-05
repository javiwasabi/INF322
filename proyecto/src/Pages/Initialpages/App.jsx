import React, { useEffect, useState } from 'react';
import Buscador from '../../Components/buscador';
import Navbar from '../../Components/navbar';
import Autos from '../../Components/autos';
import Catalogos from '../../Components/catalogo';
import BackgroundBubbles from '../../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula
import { CustomButton } from '../../Components/buttons';
import { PrevButton, NextButton } from '../../Components/buttons';



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
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        
        <div className="z-10 text-center space-y-6">
          <div className="text-5xl font-merriweatherBold text-gray-800">
            <p>Your baby</p>
            <p>Child growth</p>
          </div>
          <p className="text-gray-500 font-poppins  md:text-s">Monitorea su crecimiento con una pequeña ayuda</p>
          <div className='mt-[10%] p-10 flex flex-col items-center'>
            <p className=" text-gray-600 text-sm font-poppins md:text-s">Selecciona una opción para continuar</p>


           <div className="flex flex-col items-center space-y-6 mt-[10%] w-full">
                <CustomButton label="Nuevo Usuario" onClick={handleBack} className="w-full h-12 text-lg" />
                <CustomButton label="Usuario existente" onClick={handleBack} className="w-full h-12 text-lg" />
            </div>
          </div>

          <PrevButton label="Devolverse" target="/" />
          <NextButton label="Siguiente" target="/aboutyou1" />



          
        </div>
      </div>
    </div>
  );
}


export default App;
