import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
	const blogIds = Array.from(Object.keys(blogs));

	return <div className="BlogList">{blogIds.map((id) => <BlogCard />)}</div>;
};

export default BlogList;
