import React from 'react';
import mapa from '../assets/Captura.PNG';
import puntero from '../assets/location.png'; 
import arrow from '../assets/arrow.png'; 
import { useNavigate} from 'react-router-dom'
import foto from '../assets/perfil.png';
import foto2 from '../assets/foto2.jpg';

export const Mapa = () => {

  const navigate = useNavigate();

  const nav_return = () =>{
    navigate('/paneles');
} 

  const enviar = (datos) =>{
    navigate('/perfil', {state: datos})
  }

  const dato_1 ={
    nombre : "Francisco Fierro",
    imagen : foto,
    estrellas: 4,
    correo : "Fede.Fier@gmail.com",
    telefono : "+56972203589",
    servicio : "Lavado de autos",
    descripcion : "Lavado de tapiz, lavado exterior en seco, aplicacion cera",
    precio : "$20000" 
  }

  const dato_2 ={
    nombre : "Ricardo Leon",
    imagen : foto2,
    estrellas: 5,
    correo : "leones007@gmail.com",
    telefono : "+56985390092",
    servicio : "Lavado de autos",
    descripcion : "Lavado profundo a mano, encerado",
    precio : "$30000" 
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%',}}>
      
      <button 
        onClick={() => nav_return()}
        style={{
          position: 'absolute',
          top: '2%',      
          left: '3%',    
          transform: 'translate(-50%, -50%)',  
          backgroundColor: 'transparent',      
          border: 'none',             
          cursor: 'pointer',
          padding: '0',
        }}
      >
        <img 
          src={arrow} 
          alt="arrow" 
          style={{ width: '40px', height: '40px'}}  
        />
      </button>

      <img 
        src={mapa}  
        alt="Mapa" 
        style={{
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          }}
      />

      <button 
        onClick={() => enviar(dato_1)}  
        style={{
          position: 'absolute',
          top: '50%',      
          left: '50%',    
          transform: 'translate(-50%, -50%)',  
          backgroundColor: 'transparent',      
          border: 'none',             
          cursor: 'pointer',
          padding: '0',
        }}
      >
        <img 
          src={puntero} 
          alt="Puntero" 
          style={{ width: '40px', height: '40px' }}  
        />
      </button>
      <button 
        onClick={() => enviar(dato_2)}    
        style={{
          position: 'absolute',
          top: '80%',      
          left: '30%',    
          transform: 'translate(-50%, -50%)',  
          backgroundColor: 'transparent',      
          border: 'none',             
          cursor: 'pointer',
          padding: '0',
        }}
      >
        <img 
          src={puntero} 
          alt="Puntero" 
          style={{ width: '40px', height: '40px'}}  
        />
      </button>
    </div>
  );
};

export default Mapa;
