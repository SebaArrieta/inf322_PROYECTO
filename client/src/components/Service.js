import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/Service.css"

const Service = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const Datos = location.state?.Datos || {  // Usa un objeto vacío como valor predeterminado
        Nombre: '',
        Apellido: '',
        Correo: '',
        Telefono: '',
        Servicio: '',
        Descripcion: '',
    };

    const handleEdit = (e) => {
        e.preventDefault()
        navigate('/ServiceForm', { state: { Datos: Datos } });
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <button className="back-button" onClick={() => navigate ('/')} >←</button>
            <div className="card p-4">
                <h2 className="text-center">Resumen del Servicio</h2>
                <h5 className="card-title text-center">{Datos.Nombre} {Datos.Apellido}</h5>
                <div className="card-body">
                    <p className="card-text">
                        <strong>Correo:</strong> {Datos.Correo}
                    </p>
                    <p className="card-text">
                        <strong>Teléfono:</strong> {Datos.Telefono}
                    </p>
                    <p className="card-text">
                        <strong>Servicio:</strong> {Datos.Servicio}
                    </p>
                    <p className="card-text">
                        <strong>Descripción:</strong><br />
                        <textarea
                            className="descripcion-textarea"
                            value={Datos.Descripcion}
                            readOnly
                        ></textarea>
                    </p>
                </div>

                <div className="text-center">
                    <button className="btn btn-primary btn-Editar" onClick={handleEdit}>Editar</button>
                </div>
            </div>
        </div>
    );
};

export default Service;