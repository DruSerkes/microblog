import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, id, votes }) => {
	return (
		<div className="BlogCard">
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
