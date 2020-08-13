import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';
import BlogForm from './BlogForm';

const Routes = () => {
	const [ blogs, setBlogs ] = useState(null);

	const saveBlog = ({ title, description, body, id }) => {
		if (id in blogs) {
			setBlogs((blogs) => ({ ...blogs, [id]: { title, description, body, id } }));
		} else {
			// const newId = uuid();
			setBlogs((blogs) => ({ ...blogs, [id]: { title, description, body, id } }));
		}
	};

	return (
		<Switch>
			<Route exact path="/add">
				<BlogForm saveBlog={saveBlog} />
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
