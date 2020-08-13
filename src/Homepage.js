import React from 'react';
import BlogList from './BlogList';

const Homepage = ({ blogs }) => {

    
	return (
		<div className="Homepage">
			<p>
				Welcome to <b>Microblog,</b> our innovative site for communicating on the information super highway!
			</p>
			<BlogList blogs={blogs} />
		</div>
	);
};

export default Homepage;
