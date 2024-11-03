import React from 'react';
import check from '../assets/check.png'
import { useNavigate, useLocation } from 'react-router-dom';

export const Checking = ()=>{
    const location = useLocation();
    const navigate = useNavigate();

    const msg = location.state?.msg || '';
    const nav = location.state?.nav || '/';

    const nav_inicio = () =>{
        navigate(nav)
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

            <p style={{
                backgroundColor: '#113946',      
                border: 'none',
                borderRadius: '5px',   
                color: '#ffffff',          
                cursor: 'pointer',
                padding: '5px'
            }}>Continuar</p>
            </button>
            
            <p className="font-weight-bold">{msg}</p>
        </div>
    )
}

export default Checking