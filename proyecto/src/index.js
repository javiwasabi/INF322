import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router
import App from './Pages/Initialpages/App';
import reportWebVitals from './reportWebVitals';
import GraphsMenu from '../src/Pages/graphs_menu';
import Imc from '../src/Pages/imc';
import Longitud from '../src/Pages/lonigtud';
import Perimetro from '../src/Pages/perimetro';
import Peso_edad from '../src/Pages/peso_edad';
import Peso_talla from '../src/Pages/peso_talla';
import Talla from '../src/Pages/talla';
import Aboutyou1 from './Pages/Initialpages/Aboutyou1';
import Aboutyou2 from './Pages/Initialpages/Aboutyou2';
import Aboutyou3 from './Pages/Initialpages/Aboutyou3';
import Foro from './Pages/foro';
import Cambios from './Pages/RegistrarCambios';
import Home from './Pages/HomePage';

import './estilos/graphs.css';
import './estilos/sub_graphs.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/graphs" element={<GraphsMenu />} /> 
      <Route path="/imc" element={<Imc />} /> 
      <Route path="/longitud" element={<Longitud />} /> 
      <Route path="/perimetro" element={<Perimetro />} /> 
      <Route path="/pesoedad" element={<Peso_edad />} /> 
      <Route path="/pesotalla" element={<Peso_talla />} /> 
      <Route path="/talla" element={<Talla />} /> 
      <Route path="/aboutyou1" element={<Aboutyou1/>} /> 
      <Route path="/aboutyou2" element={<Aboutyou2/>} /> 
      <Route path="/aboutyou3" element={<Aboutyou3/>} /> 
      <Route path="/foro" element={<Foro/>} /> 
      <Route path="/cambios" element={<Cambios/>} /> 
      <Route path="/home" element={<Home/>} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);