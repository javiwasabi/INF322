import React, { useEffect, useState } from 'react';
import Buscador from '../../Components/buscador';
import Navbar from '../../Components/navbar';
import Autos from '../../Components/autos';
import Catalogos from '../../Components/catalogo';
import BackgroundBubbles from '../../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula
import { CustomButton } from '../../Components/buttons';
import { PrevButton, NextButton } from '../../Components/buttons';

function Aboutyou3() {
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
          
          
          <div className='mt-[10%] p-10 flex flex-col items-center'>
          <div className="text-5xl font-merriweatherBold text-gray-800 text-center">
       
       <p>Perfecto! </p>
       <p>Ahora puedes navegar en nuestra app </p>
        
     
         
       </div>
            


           <div className="flex flex-col items-center space-y-6 mt-[10%] w-full">
          
          </div>

          <PrevButton label="Devolverse" target="/aboutyou2" />
          <NextButton label="Siguiente" target="/home" />
          </div>
          </div>
          </div>
          </div>
          
          

  );
}


export default Aboutyou3;