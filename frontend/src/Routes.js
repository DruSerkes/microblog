import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import BlogDetails from './BlogDetails';
import AddBlog from './AddBlog';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/add">
				<AddBlog />
			</Route>
			<Route exact path="/:id">
				<BlogDetails />
			</Route>
			<Route exact path="/">
				<Homepage />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
