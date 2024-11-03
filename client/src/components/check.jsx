import React from 'react';
import check from '../assets/check.png'
import { useNavigate, useLocation } from 'react-router-dom';

export const Checking = ()=>{
    const location = useLocation();
    const navigate = useNavigate();

    const msg = location.state?.msg || '';
    const nav = location.state?.nav || '/';
    const Datos = location.state?.Datos || '';

    const nav_inicio = () =>{
        navigate(nav, { state: { Datos: {...Datos} } })
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
            
            <p>{msg}</p>
        </div>
    )
}

export default Checking