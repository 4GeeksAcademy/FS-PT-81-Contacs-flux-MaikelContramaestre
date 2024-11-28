import React, { useContext } from "react";
import { Card } from "../component/usuarioFormulario.jsx";
import { Context } from "../store/appContext";

export const UsuarioNuevo = () => {
    const { store, actions } = useContext(Context)

    return ( 
            <Card />
    )
}