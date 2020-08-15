import React from 'react';
import BlogList from './BlogList';

const Homepage = () => {
	return (
		<div className="Homepage">
			<p>
				Welcome to <b>Microblog,</b> our innovative site for communicating on the information super highway!
			</p>
			<BlogList />
		</div>
	);
};

export default Homepage;
