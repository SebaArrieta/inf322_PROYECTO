import React from 'react';
import '../styles/Start.css';
import {useNavigate} from 'react-router-dom';

function Pag1() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Servicios Domésticos a la puerta de tu casa</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate ('/ServiceForm')}>Prestar servicio</button>
        <button className="btn"onClick={() => navigate ('/mapa')}>Ver mapa</button>
      </div>
    </div>
  );
}

export default Pag1;
