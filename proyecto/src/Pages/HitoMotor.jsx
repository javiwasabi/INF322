import React, { useState } from 'react';
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

const Card = ({ text, image, isChecked, limitDate, onCardClick }) => {
  return (
    <div
      onClick={onCardClick}
      className={`p-4 w-48 text-center border rounded-lg shadow-md cursor-pointer transition-transform duration-200 ${
        isChecked ? 'bg-green-500 text-white' : 'bg-white text-black'
      }`}
    >
      <img src={image} alt={text} className="w-full h-auto rounded-md mb-2" />
      <h3 className="font-bold mb-2">{text}</h3>
      <p className="text-sm">Consultar con el pediatra si este hito no se ha cumplido antes de: {limitDate}</p>
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
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden p-4">
        <BackgroundBubbles />

        <div className="z-10 text-center space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-4">Ingrese la fecha de nacimiento de su hijo</h1>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="px-4 py-2 border rounded-lg mb-4"
            />
          </div>

          <h2 className="text-xl font-semibold mb-4">Seleccione las tarjetas para marcar el avance.</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <Card
                key={card.id}
                text={card.text}
                image={card.image}
                isChecked={checkedCards[index]}
                limitDate={date ? addMonthsToDate(date, card.months) : 'N/A'}
                onCardClick={() => toggleCardCheck(index)}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 absolute left-20">
          <PrevButton label="Atrás" target="/" />
        </div>
        
        
      </div>
    </div>
  );
};

export default App2;
