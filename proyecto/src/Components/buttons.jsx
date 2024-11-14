import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PrevButton = ({ label, target }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(target); // Navega a la ruta especificada
    };

    return (
        <button
            className="px-4 py-2 bg-yellow-50 rounded-md shadow text-gray-700 italic absolute bottom-[10%] left-[20%]"
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export const NextButton = ({ label, target }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(target); // Navega a la ruta especificada
    };

    return (
        <button
            className="px-4 py-2 bg-yellow-50 rounded-md shadow text-gray-700 italic absolute bottom-[10%] right-[20%]"
            onClick={handleClick}
        >
            {label}
        </button>
    );
};


export const CustomButton = ({ label, onClick }) => {
  return (
    <button
      className="w-md md:w-40 py-3 bg-yellow-200 rounded-lg shadow-md text-gray-700 text-xs md:text-xs"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
