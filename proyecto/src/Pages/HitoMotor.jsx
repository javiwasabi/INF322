import React, { useState } from 'react';
import Buscador from '../Components/buscador';
import Navbar from '../Components/navbar';
import Autos from '../Components/autos';
import Catalogos from '../Components/catalogo';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula
import image1 from './assets/etapa1.jpg';
import image2 from './assets/etapa2.jpg';
import image3 from './assets/etapa3.jpg';
import image4 from './assets/etapa4.jpg';
import image5 from './assets/etapa5.jpg';
import image6 from './assets/etapa6.jpg';
import { PrevButton } from '../Components/buttons';


// Sample data for the cards
const cardData = [
  { id: 1, text: 'Sentarse sin apoyo', image: image1 },
  { id: 2, text: 'Mantenerse parado con apoyo', image: image2 },
  { id: 3, text: 'Aprendió a gatear', image: image3 },
  { id: 4, text: 'Puede caminar con apoyo', image: image4 },
  { id: 5, text: 'Puede pararse solo', image: image5 },
  { id: 6, text: 'Puede caminar solo', image: image6 },
];

const Card = ({ text, image, isChecked, onDateChange }) => {
  return (
    <div
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
      <h3>{text}</h3>
      <input
        type="date"
        onChange={onDateChange}
        style={{
          marginTop: '8px',
          color: isChecked ? 'black' : 'inherit',
          backgroundColor: isChecked ? 'white' : 'inherit',
          padding: '4px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};


const App2 = () => {
  const [checkedCards, setCheckedCards] = useState(Array(6).fill(false));

  const handleDateChange = (index, event) => {
    const newCheckedCards = [...checkedCards];
    newCheckedCards[index] = event.target.value !== '';
    setCheckedCards(newCheckedCards);
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
            image={card.image}
            isChecked={checkedCards[index]}
            onDateChange={(event) => handleDateChange(index, event)}
            />
            ))}
            </div>  
            
          
          
        </div>
        <PrevButton label="Devolverse" target="/home" />
      </div>
    </div>
  );

    
  

};

export default App2;