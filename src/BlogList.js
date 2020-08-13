import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
	const blogIds = Object.keys(blogs);

	return (
		<div className="BlogList">
			{blogIds.map((id) => {
				let { title, description } = blogs[id];
				return <BlogCard title={title} description={description} id={id} />;
			})}
		</div>
	);
};

export default BlogList;
