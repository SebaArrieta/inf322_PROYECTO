import React from 'react';
import '../styles/Start.css';
import {useNavigate} from 'react-router-dom';

function Pag1() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Servicios Domésticos a la puerta de tu casa</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate ('/mapa')}>Buscar un servicio en particular</button>
        <button className="btn"onClick={() => navigate ('/ServiceForm')}>Publicar búsqueda de un servicio</button>
      </div>
    </div>
  );
}

export default Pag1;
