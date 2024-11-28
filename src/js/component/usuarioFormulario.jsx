import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Card =()=>{
    const {actions} =useContext(Context);
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        name:'',
        phone:'',
        email:'',
        address:''
    })
const handleCancel=()=> navigate('/')

    const handleChange = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }
    
    const handleSubmit = e =>{
            e.preventDefault();
            actions.addUsuario(userData);
            setUserData({name: '', phone: '', email:'', address:''})
            navigate('/');
    }
   
     
    return(
        <>
        <div className="container d-flex aling-content-center mt-5" style= {{width:'550px'}} >
            <form className=" card form-control d-flex mb-2" style= {{width:'30rem', height: '25rem'}} onSubmit={handleSubmit}>
               <h3 className=" card-text mb-4 ">Agrega un Contacto</h3>
                <input className="form-control mb-2" type="text" placeholder="Nombre" value={userData.name} onChange={handleChange}  name="name" required/>
                <input className="form-control mb-2" type="text" placeholder="Telefono" value={userData.phone} onChange={handleChange} name="phone"  required/>
                <input className="form-control mb-2" type="text" placeholder="E-mail" value={userData.email} onChange={handleChange} name="email"   required/>
                <input className="form-control mb-5" type="text" placeholder="Direccion" value={userData.address} onChange={handleChange} name="address" required/>
                <input className="btn btn-primary mb-2" type="submit" value={'Enviar'} />
                <button className="btn btn-danger  " onClick={handleCancel}> regresar</button>
            </form>
        </div>

        </>
    )
}