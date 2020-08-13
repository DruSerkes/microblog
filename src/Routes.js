import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Routes = () => {
	const [ blogs, setBlogs ] = useState(null);

	const saveBlog = ({ title, description, body }) => {
		setBlogs((blogs) => [ ...blogs, { title, description, body, id: uuid() } ]);
	};

	return (
		<Switch>
			<Route exact path="/add">
				<h2>Add</h2>
			</Route>
			<Route exact path="/:id">
				<h2>Post details</h2>
			</Route>
			<Route exact path="/">
				<h2>Blog</h2>
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
