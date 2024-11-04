import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router
import App from '../src/Pages/App';
import reportWebVitals from './reportWebVitals';
import GraphsMenu from '../src/Pages/graphs_menu';
import './estilos/graphs.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/graphs" element={<GraphsMenu />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);