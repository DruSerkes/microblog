import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<h2>Blog</h2>
			</Route>
			<Route exact path="/add">
				<h2>Add</h2>
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
