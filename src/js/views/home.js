import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Tarjeta } from "../component/tarjeta.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<div className="text-center mt-5">

			<img src={rigoImage} />
			<div className="text-card m-3">
				<h3>Lista de contactos</h3>
			</div>
			<div className="container d-flex justify-content-around mt-5">
			

				{store.contacts?.map(elem => <Tarjeta key={elem.id}
					name={elem.name}
					phone={elem.phone}
					email={elem.email}
					address={elem.address}
					userId={elem.id}
					/>)}

				
			</div>
		</div>
	)
}