import React from 'react';
import BlogCard from './BlogCard';
import { useSelector } from 'react-redux';

const BlogList = () => {
	const titles = useSelector((state) => state.titles);
	const blogIds = Object.keys(titles);
	return (
		<div className="BlogList">
			{blogIds.map((id) => {
				let { title, description } = titles[id];
				return <BlogCard title={title} description={description} id={id} key={id} />;
			})}
		</div>
	);
};

export default BlogList;
