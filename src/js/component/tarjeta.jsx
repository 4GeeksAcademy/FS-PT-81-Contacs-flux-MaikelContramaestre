import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Tarjeta = props => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleEdit = () => {
        console.log(props.userId);
        console.log(contact);


        let contact = store.contacts.filter(elem => elem.id === props.userId)[0]
        actions.selectContact(contact)
        console.log(contact);
        navigate('/edicionContacto/' + props.userId)
    }

    const handleDelete = () => actions.deleteContacto(props.userId)

    return (
        <>
            <div className="container-fluid text-center mt-5">
                <div className="card text-center mx-2" style={{ width: '18rem' }}>
                    <img src="https://www.webiconio.com/_upload/255/image_255.svg" className="card-img-top" alt={props.name} />
                    <div className="card-body">
                        <h4 className="card-text">Nombre: {props.name}</h4>
                        <p className="card-text">Telefono: {props.phone}</p>
                        <p className="card-text">E-mail: {props.email}</p>
                        <p className="card-text">Direccion: {props.address}</p>

                        <button onClick={handleEdit} className="btn btn-success ">
                            <i className="fa-solid fa-user-pen p-2 "></i>
                        </button>

                        <button onClick={handleDelete} className="btn btn-danger">
                            <i className="fa-solid fa-user-slash p-2"></i>

                        </button>
                    </div>
                </div>
            </div>

        </>


    )
}

