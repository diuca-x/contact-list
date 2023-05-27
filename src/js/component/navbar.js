import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 navbar_container">			
			<div className="">
				<Link to="/add/0">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
