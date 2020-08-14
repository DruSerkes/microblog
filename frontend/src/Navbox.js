import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbox.css';

const Navbox = () => {
	return (
		<div className="Navbox">
			<h1>Microblog</h1>
			<p>Get in the Rithm of blogging!</p>
			<NavLink to="/"> Blog </NavLink>
			<NavLink to="/add"> Add a new post </NavLink>
		</div>
	);
};

export default Navbox;
