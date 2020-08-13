import React from 'react';
import { Navlink } from 'react-router-dom';

const Navbox = () => {
	return (
		<div className="Navbox">
			<h1>Microblog</h1>
			<p>Get in the Rithm of blogging!</p>
			<Navlink to="/">Blog</Navlink>
			<Navlink to="/add">Add a new post</Navlink>
		</div>
	);
};

export default Navbox;
