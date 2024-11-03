import React, { useEffect, useState } from 'react';
import "../styles/ServiceForm.css"
import { useNavigate, useLocation } from 'react-router-dom';

const ServiceForm = () => {
    const location = useLocation();
    const [Datos, setDatos] = useState({
        Nombre: "",
        Apellido: "",
        Correo: "",
        Telefono: "",
        Servicio: "",
        Descripcion: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        setDatos(location.state?.Datos || { 
            Nombre: '',
            Apellido: '',
            Correo: '',
            Telefono: '',
            Servicio: '',
            Descripcion: '',
        })
    }, []);

    const completeForm = (e) => {
        const { name, value } = e.target;
        setDatos(prevDatos => ({
            ...prevDatos,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/check', { state: { msg:'Servicio publicado', nav:'/service', Datos: {...Datos} } })
    }

    return (
        <div className="container service-container">
            <button className="back-button" onClick={() => navigate ('/')} >←</button>
            <div className="row justify-content-center">
                <h2 className="text-center">Formulario de Servicio</h2>
                <form className="col-md-7" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNombre"
                                name="Nombre"
                                value={Datos.Nombre}
                                onChange={completeForm}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputApellido"
                                name="Apellido"
                                value={Datos.Apellido}
                                onChange={completeForm}
                            />
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="inputEmail">Correo:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            name="Correo"
                            value={Datos.Correo}
                            onChange={completeForm}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="inputTelefono">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputTelefono"
                            name="Telefono"
                            value={Datos.Telefono}
                            onChange={completeForm}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputServicio">Tipo de Servicio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputServicio"
                            name="Servicio"
                            value={Datos.Servicio}
                            onChange={completeForm}
                        />
                    </div>

                    <div className="form-group">
                        <label for="inputDescripcion" class="form-label">Descripción</label>
                        <textarea 
                            class="form-control" 
                            id="inputDescripcion" 
                            name="Descripcion" 
                            rows="3" 
                            value={Datos.Descripcion} 
                            onChange={completeForm}/>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-confirmar">Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceForm;