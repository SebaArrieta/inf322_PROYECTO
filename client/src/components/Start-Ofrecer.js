import React from 'react';
import '../styles/Start.css';
import {useNavigate} from 'react-router-dom';

function StartOfrecer() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate('/')}>←</button>
      <h1>Servicios Domésticos a la puerta de tu casa</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate ('/ServiceForm')}>Publicar un servicio</button>
        <button className="btn"onClick={() => navigate ('/mapa')}>Ver mapa</button>
      </div>
    </div>
  );
}

export default StartOfrecer;
