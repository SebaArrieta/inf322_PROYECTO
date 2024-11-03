import React from 'react';
import '../styles/Start.css';
import {useNavigate} from 'react-router-dom';

function StartBuscar() {
    const navigate = useNavigate();

  return (
    
    <div className="container">
      <button className="back-button" onClick={() => navigate('/')}>←</button>
      <h1>Servicios Domésticos a la puerta de tu casa</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate ('/options')}>Buscar un servicio en particular</button>
        <button className="btn"onClick={() => navigate ('/ServiceForm')}>Publicar búsqueda de un servicio</button>
      </div>
    </div>
  );
}

export default StartBuscar;
