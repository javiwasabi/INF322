import React, { useEffect, useState } from 'react';
import BackgroundBubbles from '../../src/Components/backgroundBubbles';
import { PrevButton } from '../Components/buttons';
import { Link } from 'react-router-dom';

function Foro() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleBack = () => alert('Volver a la página anterior');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarBackground(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Fondo de burbujas */}
      <BackgroundBubbles />

      {/* Contenido principal */}
      <div className="relative z-10 p-8">
        <div className="container mx-auto">
          <header className={`flex justify-between items-center mb-6 ${navbarBackground ? 'bg-purple-700 text-white' : 'bg-transparent'} transition-colors duration-300 py-4 px-6 rounded-md`}>
            <h1 className="text-xl font-merriweatherBold text-black-400">Your baby Child growth</h1>
            
            
          </header>

          <div className="flex">
            {/* Barra lateral */}
            <aside className="w-1/4 p-4 bg-white rounded-md shadow-md mr-4">
              <button className="bg-orange-400 hover:bg-white hover:bg-yellow-400 text-white w-full py-2 rounded-md mb-4 transition-colors duration-200">Hacer una Pregunta</button>
              <ul className="space-y-2">
                <li className="font-semibold text-gray-800">Todos los Temas</li>
                <li className="text-gray-600 hover:text-orange-600 cursor-pointer">Pediatría</li>
                <li className="text-gray-600 hover:text-orange-600 cursor-pointer">Autoevaluación</li>
                <li className="text-gray-600 hover:text-orange-600 cursor-pointer">Desarrollo Infantil</li>
                {/* Agrega más temas según sea necesario */}
              </ul>
            </aside>

            {/* Contenido principal */}
            <main className="w-3/4">
              <div className="space-y-6">
                {[
                  { title: '¿Estoy tomando el curso adecuado para el desarrollo de mi hijo?', author: 'Maria Pérez', responses: 5, content: 'Tengo algunas dudas sobre si este curso es realmente el adecuado para el desarrollo de mi hijo de 3 años. ¿Alguien ha tenido una experiencia similar?' },
                  { title: '¿Cómo evaluar el desarrollo cognitivo en niños de 2 a 4 años?', author: 'Juan Gómez', responses: 8, content: 'Me gustaría saber qué métodos son recomendables para evaluar el desarrollo cognitivo en la primera infancia. Cualquier consejo sería útil.' },
                  { title: '¿Qué ejercicios son adecuados para estimular el lenguaje en un niño de 3 años?', author: 'Ana López', responses: 4, content: 'Estoy buscando actividades o ejercicios que puedan ayudar a mi hijo a desarrollar sus habilidades de lenguaje. ¿Qué me recomiendan?' }
                ].map((post, index) => (
                  <div key={index} className="bg-white p-6 rounded-md shadow-md">
                    <h2 className="font-semibold text-lg text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.content}</p>
                    <div className="flex items-center justify-between mt-4 text-gray-500">
                      <span>{post.author} • {post.responses} respuestas</span>
                      <button className="text-orange-300 hover:underline">Seguir</button>
                    </div>
                  </div>
                ))}

                
              </div>
            </main>
          </div>
        </div>
        <div className="fixed bottom-4 left-4">
        <PrevButton label="Atrás" target="/" />
      </div>
      </div>


      
    </div>
  );
}

export default Foro;
