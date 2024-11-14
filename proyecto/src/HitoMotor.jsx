import React, { useState } from 'react';
import Buscador from '../Components/buscador';
import Navbar from '../Components/navbar';
import Autos from '../Components/autos';
import Catalogos from '../Components/catalogo';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula
// Sample data for the cards
const cardData = [
  { id: 1, text: 'Card 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, text: 'Card 2', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, text: 'Card 3', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, text: 'Card 4', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, text: 'Card 5', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, text: 'Card 6', imageUrl: 'https://via.placeholder.com/150' },
];

const Card = ({ text, imageUrl, isChecked, onClick, date, onDateChange, showDate }) => {
  return (
    <div
      onClick={onClick}
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
      <img src={imageUrl} alt={text} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
      <h3>{text}</h3>
      {showDate && (
        <input
          type="date"
          value={date}
          onChange={onDateChange}
          style={{ marginTop: '8px', padding: '4px', borderRadius: '4px' }}
        />
      )}
      {!showDate && date && <p>{date}</p>}
      <input type="checkbox" checked={isChecked} readOnly />
    </div>
  );
};

const App2 = () => {
  const [checkedCards, setCheckedCards] = useState(Array(6).fill(false));
  const [date, setDate] = useState('');

  const handleCardClick = (index) => {
    const newCheckedCards = [...checkedCards];
    newCheckedCards[index] = !newCheckedCards[index];
    setCheckedCards(newCheckedCards);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles /> {/* Usa BackgroundBubbles en lugar de backgroundBubbles */}
        <div className="z-10 text-center space-y-6">
          <div>
            {cardData.map((card, index) => (
              <Card
                key={card.id}
                text={card.text}
                imageUrl={card.imageUrl}
                isChecked={checkedCards[index]}
                onClick={() => handleCardClick(index)}
                date={date}
                onDateChange={index === 0 ? handleDateChange : undefined}
                showDate={index === 0}
              />
            ))}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default App2;