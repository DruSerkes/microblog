import React, { useEffect } from 'react';
import BlogCard from './BlogCard';
import { useSelector, useDispatch } from 'react-redux';
import { getTitles } from './reducers/actions';

const BlogList = () => {
	const dispatch = useDispatch();
	const titles = useSelector((state) => state.titles);
	const titleKeys = Object.keys(titles);

	useEffect(
		() => {
			dispatch(getTitles());
		},
		[ dispatch ]
	);

	return (
		<div className="BlogList">
			{titleKeys.map((key) => {
				let { title, description, id, votes } = titles[key];
				return <BlogCard title={title} description={description} id={id} key={id} votes={votes} />;
			})}
		</div>
	);
};

export default BlogList;
