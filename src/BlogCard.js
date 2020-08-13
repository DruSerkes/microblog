import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, id }) => {
	return (
		<div className="BlogList">
			<h4>
				<Link to={`/${id}`}>{title}</Link>
			</h4>
			<p>
				<em>{description}</em>
			</p>
		</div>
	);
};

export default BlogCard;
