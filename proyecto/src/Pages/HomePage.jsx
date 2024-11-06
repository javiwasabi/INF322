import React from 'react';
import BackgroundBubbles from '../Components/backgroundBubbles';
import { NavMenu, uppdateC } from '../Components/MenuComponentes';
import { PrevButton, NextButton } from '../Components/buttons';

function Home() {
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

      {/* Sección de botones de opciones - Ocupa el segundo 33% */}
      <div className="h-1/3 flex flex-col items-center justify-start w-full pt-10">
        {/* Título arriba de los botones */}
        <h2 className="text-center text-gray-700 font-semibold text-lg mb-6 z-30 md:text-xl">
          ¿En qué te podemos ayudar hoy?
        </h2>

        {/* Contenedor de los botones en un grid de 2 columnas */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md p-6">
          <NavMenu label="Los Seis hitos de desarrollo motor" target="/hito-motor" />
          <NavMenu label="Graficos y tablas de normalidad" target="/graficos-tablas" />
          <NavMenu label="Ayuda ante dudas" target="/foro" />
          <NavMenu label="Ver sesiones anteriores" target="/sesionesanteriores" />
        </div>
      </div>

      {/* Botón de actualización - Ubicado en la esquina inferior izquierda, con posicionamiento fijo */}
      <div className="fixed bottom-4 left-10 z-50">
        <PrevButton label="Actualizar datos manualmente" target= "/cambios"/>
      </div>
      <div className="fixed bottom-4 right-10 z-50">
        <NextButton label="Registrarse" target= "/"/>
      </div>
    </div>
  );
}

export default Home;


