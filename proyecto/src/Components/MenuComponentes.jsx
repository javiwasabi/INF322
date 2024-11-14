// Componente NavMenu
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavMenu = ({ label, target }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(target); // Navega a la ruta especificada
    };

    return (
        <button
            className="flex items-center justify-center h-full w-full mt-[3%] p-3 md:p-4 bg-[#EAD35A] rounded-xl shadow-md hover:bg-[#D2C16E] transition-colors duration-300"
            onClick={handleClick}
        >
            <div className="bg-[#9FC698] w-full h-full flex items-center justify-center rounded-xl text-center text-gray-700 font-medium text-sm md:text-base px-2 py-1">
                {label}
            </div>
        </button>
    );
};

// Componente uppdateC para el botón de actualización
export const uppdateC = ({ label, onClick }) => {
    return (
      <button
        className="w-full py-3 bg-[#EAD35A] rounded-xl shadow-md text-gray-700 text-lg font-semibold hover:bg-[#D2C16E] transition-colors duration-300"
        onClick={onClick}
      >
        {label}
      </button>
    );
};

