import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { vote } from './reducers/actions';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogCard = ({ title, description, id, votes }) => {
	const dispatch = useDispatch();
	const handleUpVote = () => {
		dispatch(vote(id, 'up'));
	};
	const handleDownVote = () => {
		dispatch(vote(id, 'down'));
	};

	return (
		<div className="BlogCard">
			<h4>
				<Link to={`/${id}`}>{title}</Link>
			</h4>
			<p>
				<em>{description}</em>
			</p>
			<div className="BlogCard-Votes">
				{votes} votes
				<button onClick={handleUpVote}>
					<FontAwesomeIcon icon={faThumbsUp} />
				</button>
				<button onClick={handleDownVote}>
					<FontAwesomeIcon icon={faThumbsDown} />
				</button>
			</div>
		</div>
	);
};

export default BlogCard;
