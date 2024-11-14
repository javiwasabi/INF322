import React, { useEffect, useState } from 'react';
import BackgroundBubbles from '../../src/Components/backgroundBubbles';
import { PrevButton } from '../Components/buttons';
import { Link } from 'react-router-dom';

function Foro() {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([
    {
      title: '¿Estoy tomando el curso adecuado para el desarrollo de mi hijo?',
      author: 'Maria Pérez',
      responses: 5,
      content: 'Tengo algunas dudas sobre si este curso es realmente el adecuado para el desarrollo de mi hijo de 3 años. ¿Alguien ha tenido una experiencia similar?',
    },
    {
      title: '¿Cómo evaluar el desarrollo cognitivo en niños de 2 a 4 años?',
      author: 'Juan Gómez',
      responses: 8,
      content: 'Me gustaría saber qué métodos son recomendables para evaluar el desarrollo cognitivo en la primera infancia. Cualquier consejo sería útil.',
    },
    {
      title: '¿Qué ejercicios son adecuados para estimular el lenguaje en un niño de 3 años?',
      author: 'Ana López',
      responses: 4,
      content: 'Estoy buscando actividades o ejercicios que puedan ayudar a mi hijo a desarrollar sus habilidades de lenguaje. ¿Qué me recomiendan?',
    },
  ]);

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

  const handleQuestionSubmit = () => {
    if (question.trim()) {
      setQuestions([
        ...questions,
        { title: question, author: 'Usuario', responses: 0, content: question },
      ]);
      setQuestion('');
      setShowModal(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Fondo de burbujas */}
      <BackgroundBubbles />

      {/* Contenido principal */}
      <div className="relative z-10 p-8">
        <div className="container mx-auto">
          <header
            className={`flex justify-between items-center mb-6 ${
              navbarBackground ? 'bg-purple-700 text-white' : 'bg-transparent'
            } transition-colors duration-300 py-4 px-6 rounded-md`}
          >
            <h1 className="text-xl font-merriweatherBold text-black-400">Your baby Child growth</h1>
          </header>

          <div className="flex">
            {/* Barra lateral */}
            <aside className="w-1/4 p-4 bg-white rounded-md shadow-md mr-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-orange-400 hover:bg-yellow-400 text-white w-full py-2 rounded-md mb-4 transition-colors duration-200"
              >
                Hacer una Pregunta
              </button>
              <ul className="space-y-2">
                <li className="font-semibold text-gray-800">Todos los Temas</li>
                <li className="text-gray-600 hover:text-orange-600 cursor-pointer">Pediatría</li>
                <li className="text-gray-600 hover:text-orange-600 cursor-pointer">Autoevaluación</li>
                <li className="text-gray-600 hover:text-orange-600 cursor-pointer">Desarrollo Infantil</li>
              </ul>
            </aside>

            {/* Contenido principal */}
            <main className="w-3/4">
              <div className="space-y-6">
                {questions.map((post, index) => (
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

      {/* Modal para hacer una pregunta */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-11/12 max-w-md">
            <h2 className="text-lg font-semibold mb-4">Hacer una Pregunta</h2>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              rows="4"
              placeholder="Escribe tu pregunta aquí..."
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={handleQuestionSubmit}
                className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500"
              >
                Hacer Pregunta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Foro;
