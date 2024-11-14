import React, { useState } from 'react';

import Buscador from '../Components/buscador';
import Navbar from '../Components/navbar';
import Autos from '../Components/autos';
import Catalogos from '../Components/catalogo';
import BackgroundBubbles from '../Components/backgroundBubbles';
import image1 from './assets/etapa1.jpg';
import image2 from './assets/etapa2.jpg';
import image3 from './assets/etapa3.jpg';
import image4 from './assets/etapa4.jpg';
import image5 from './assets/etapa5.jpg';
import image6 from './assets/etapa6.jpg';
import { PrevButton } from '../Components/buttons';

const cardData = [
  { id: 1, months: 1, text: 'Sentarse sin apoyo', image: image1 },
  { id: 2, months: 2, text: 'Mantenerse parado con apoyo', image: image2 },
  { id: 3, months: 3, text: 'Aprendió a gatear', image: image3 },
  { id: 4, months: 4, text: 'Puede caminar con apoyo', image: image4 },
  { id: 5, months: 5, text: 'Puede pararse solo', image: image5 },
  { id: 6, months: 6, text: 'Puede caminar solo', image: image6 },
];

//  Funcion que maneja agregar fechas a un input de frontend, trabaja con geeks4geeks/IA
const addMonthsToDate = (date, months) => {
  const [year, month, day] = date.split("-").map(Number);
  
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error(date);
  }
  
  let newDate = new Date(year, month - 1, day);
  
  if (isNaN(newDate)) {
    throw new Error("Invalid date.");
  }

  newDate.setMonth(newDate.getMonth() + months);

  const updatedDay = String(newDate.getDate()).padStart(2, '0');
  const updatedMonth = String(newDate.getMonth() + 1).padStart(2, '0');
  const updatedYear = newDate.getFullYear();
  
  return `${updatedDay}/${updatedMonth}/${updatedYear}`;
};

// Componente cartas
const Card = ({ text, image, months, isChecked, limitDate, onCardClick }) => {
  return (
    <div
      onClick={onCardClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '200px',
        textAlign: 'center',
        backgroundColor: isChecked ? 'green' : 'white',
        color: isChecked ? 'white' : 'black',
        cursor: 'pointer',
      }}
    >
      <img src={image} alt={text} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
      <h3><b>{text}</b></h3>
      <p>Consultar con el pediatra si este hito no se ha cumplido antes de : {limitDate}</p>
    </div>
  );
};

const App2 = () => {
  const [checkedCards, setCheckedCards] = useState(Array(6).fill(false));
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const toggleCardCheck = (index) => {
    setCheckedCards((prevCheckedCards) => {
      const newCheckedCards = [...prevCheckedCards];
      newCheckedCards[index] = !newCheckedCards[index];
      return newCheckedCards;
    });
  };

  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles />
        <div className="z-10 text-center space-y-6">
          <div>
            {/* Fecha */}
            <h1><b>Ingrese la fecha de nacimiento de su hijo</b></h1>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginBottom: '16px',
              }}
            />
          </div>
          <h1><b>Seleccione las tarjetas para marcar el avance.</b></h1>

          <div>
            {/* Cards */}
            {cardData.map((card, index) => (
              <Card
                key={card.id}
                text={card.text}
                image={card.image}
                months={card.months}
                isChecked={checkedCards[index]}
                limitDate={date ? addMonthsToDate(date, card.months) : 'N/A'}
                onCardClick={() => toggleCardCheck(index)}
              />
            ))}
          </div>
        </div>
        <PrevButton label="Atrás" target="/home" />
      </div>
    </div>
  );
};

export default App2;