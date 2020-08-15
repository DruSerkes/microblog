import React, { useEffect } from 'react';
import BlogCard from './BlogCard';
import { useSelector, useDispatch } from 'react-redux';
import { getTitles, vote } from './reducers/actions';

const BlogList = () => {
	const dispatch = useDispatch();
	const reduxTitles = useSelector((state) => state.titles);
	const titles = Object.values(reduxTitles).sort((a, b) => (a.votes < b.votes ? 1 : -1));
	const upVote = (post_id) => {
		dispatch(vote(post_id, 'up'));
		dispatch(getTitles());
	};

	const downVote = (post_id) => {
		dispatch(vote(post_id, 'down'));
		dispatch(getTitles());
	};

	useEffect(
		() => {
			dispatch(getTitles());
		},
		[ dispatch ]
	);

	return (
		<div className="BlogList">
			{titles.map((t) => {
				let { title, description, id, votes } = t;
				return (
					<BlogCard
						title={title}
						description={description}
						id={id}
						key={id}
						votes={votes}
						upVote={upVote}
						downVote={downVote}
					/>
				);
			})}
		</div>
	);
};

export default BlogList;
