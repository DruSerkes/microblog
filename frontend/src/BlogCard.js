import React from 'react';
import { Link } from 'react-router-dom';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogCard = ({ title, description, id, votes }) => {
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
				<button>
					<FontAwesomeIcon icon={faThumbsUp} />
				</button>
				<button>
					<FontAwesomeIcon icon={faThumbsDown} />
				</button>
			</div>
		</div>
	);
};

export default BlogCard;
