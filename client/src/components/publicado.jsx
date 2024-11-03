import React from 'react';
import check from '../assets/check.png'
import { useNavigate} from 'react-router-dom'

export const Publicado = ()=>{
    const navigate = useNavigate();

    const nav_inicio = () =>{
        navigate('/')
    }

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', 
            backgroundColor: "#FFF2D8",
            height: '100vh',  
            margin: 0,       
            padding: 0 }}>
            <button onClick={() => nav_inicio()} style={{
                backgroundColor: 'transparent',      
                border: 'none',             
                cursor: 'pointer',
                padding: '0'
            }} >
            <img 
                src={check}
                style={{
                    width: '150px',    
                    height: '150px',     
                    borderRadius: '50%',
                    objectFit: 'cover',  
                }} 
            />
            </button>
            
            <p>Servicio Publicado</p>
        </div>
    )
}

export default Publicado