import React from 'react';
import '../styles/Start.css';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/Servicios Domesticos_transparent-.png';

function Start() {
    const navigate = useNavigate();
  return (
    <div className="container">
        <div className="logo-container">
            <div className="logo-wrapper">
                <img src={logo} alt="Logo Servicios Domésticos" className="logo" />
            </div>
        </div>
      <h1>Servicios Domésticos a la puerta de tu casa</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate ('/buscar')}>Buscar un servicio</button>
        <button className="btn"onClick={() => navigate ('/ofrecer')}>Ofrecer un servicio</button>
      </div>
    </div>
  );
}

export default Start;
