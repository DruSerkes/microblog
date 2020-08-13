import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BlogForm from './BlogForm';
import Homepage from './Homepage';
import BlogDetails from './BlogDetails';

const Routes = () => {
	const [ blogs, setBlogs ] = useState({});

	const saveBlog = ({ title, description, body, id }) => {
		if (id in blogs) {
			setBlogs((blogs) => ({ ...blogs, [id]: { title, description, body, id } }));
		} else {
			setBlogs((blogs) => ({ ...blogs, [id]: { title, description, body, id } }));
		}
	};

	const removeBlog = (id) => {
		const updatedBlogs = { ...blogs };
		delete updatedBlogs.id;
		setBlogs(updatedBlogs);
	};

	return (
		<Switch>
			<Route exact path="/add">
				<BlogForm saveBlog={saveBlog} />
			</Route>
			<Route exact path="/:id">
				<h2>Post details</h2>
				<BlogDetails saveBlog={saveBlog} removeBlog={removeBlog} blogs={blogs} />
			</Route>
			<Route exact path="/">
				{/* <h2>Blog</h2> */}
				<Homepage blogs={blogs} />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
