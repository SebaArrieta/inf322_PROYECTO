import React from 'react';
import '../styles/Start.css';
import {useNavigate} from 'react-router-dom';

function Start() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Servicios Domésticos a la puerta de tu casa</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate ('/buscar')}>Buscar un servicio</button>
        <button className="btn"onClick={() => navigate ('/ofrecer')}>Ofrecer un servicio</button>
      </div>
    </div>
  );
}

export default Start;
