import React from 'react';
import arrow from '../assets/arrow.png'; 
import { useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export const Perfil = () => {

    const navigate = useNavigate();
    const location = useLocation(); // Accedemos a los datos
    const data = location.state

    const nav_return = () =>{
        navigate('/mapa');
    }

    const nav_contratar = () =>{
        navigate('/check');
    }


    const RatingStars = ({ rating, totalStars = 5 }) => {
        const stars = [];
      
        for (let i = 1; i <= totalStars; i++) {
          stars.push(
            <i
              key={i}
              className={`bi ${i <= rating ? 'bi-star-fill' : 'bi-star'} text-warning`}
              style={{
                fontSize: 50,
                color: i <= rating ? 'gold' : 'gray'
              }}
            ></i>
          );
        }
      
        return <div>{stars}</div>;
      }

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', 
            backgroundColor: "#FFF2D8",
            textAlign: 'center',
            minHeight: '100vh',}}>
            <button  onClick={() => nav_return()} 
            style={{
                position: 'absolute',
                top: '2%',      
                left: '6%',    
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
                src={data.imagen}
                alt="" 
                style={{
                    width: '150px',    
                    height: '150px',     
                    borderRadius: '50%',
                    objectFit: 'cover',  
                }} 
            />
            <h2 style={{ margin: '10px', fontSize: '24px', fontWeight: 'bold' }}>{data.nombre}</h2>

            <RatingStars rating={data.estrellas}/>

            <h2 style={{ margin: '10px', fontSize: '24px', fontWeight: 'bold',textAlign: 'center', }}>Correo: {data.correo}</h2>
            <h2 style={{ margin: '10px', fontSize: '24px', fontWeight: 'bold',textAlign: 'center', }}>telefono: {data.telefono}</h2>
            <h2 style={{ margin: '10px', fontSize: '24px', fontWeight: 'bold',textAlign: 'center', }}>Servicio: {data.servicio}</h2>
            <h2 style={{ margin: '10px', fontSize: '24px', fontWeight: 'bold',maxWidth: '350px',textAlign: 'center', }}>Descripcion: {data.descripcion}</h2>
            <h2 style={{ margin: '10px', fontSize: '24px', fontWeight: 'bold',textAlign: 'center', }}>Precio: {data.precio}</h2>

            <button onClick={() => nav_contratar()} 
            style={{ backgroundColor: '#113946',
            color: '#fff', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px' }}>
            Contratar</button>
        </div>
    )
};

export default Perfil;
