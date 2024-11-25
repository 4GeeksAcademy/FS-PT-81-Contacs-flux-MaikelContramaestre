import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Edition = props =>{
    const {store,actions} = useContext(Context);
    
    const navigate = useNavigate();
    
    const [data,setUserData] = useState({
        id: store.selected?.id || '',
        name: store.selected?.name || '',
        phone: store.selected?.phone || '',
        email: store.selected?.email || '',
        address: store.selected?.address || ''
    })


    const handleChange = e=> {
        const {name, value} = e.target
        setUserData({...data, [name]: value})
    }
    const handleCancel = () => navigate('/')
    
    const handleSubmit = e =>{
        e.preventDefault()
        actions.editContacto(data)
        navigate('/');
    }
    return(
        <>
          <div className="container text-center mt-5">
            <form className=" card form-control d-flex mb-2" style= {{width:'30rem', height: '25rem'}} onSubmit={handleSubmit}>
               <h3 className=" card-text mb-4 ">Agrega un Contacto</h3>
                <input className="form-control mb-2" type="text" placeholder="nombre" value={data.name} onChange={handleChange}  name="name" required/>
                <input className="form-control mb-2" type="text" placeholder="telefono" value={data.phone} onChange={handleChange} name="phone"  required/>
                <input className="form-control mb-2" type="text" placeholder="email" value={data.email} onChange={handleChange} name="email"   required/>
                <input className="form-control mb-5" type="text" placeholder="direccion" value={data.address} onChange={handleChange} name="address" required/>
                <input className="btn btn-primary mb-2" type="submit" value={'enviar'} />
                <button className="btn btn-danger " onClick={handleCancel}> regresar</button>
            </form>
        </div>
        
        </>
    )
}