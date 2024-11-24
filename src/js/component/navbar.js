import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark border-bottom border-body px-3" data-bs-theme="dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> Contacts List </span>
			</Link>
			<div className="ml-auto">
				<Link to="/usuarioNuevo">
					<button className="btn btn-primary"> Nuevo Usuario </button>
				</Link>
			</div>
		</nav>
	);
};
