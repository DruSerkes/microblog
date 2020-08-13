import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ id, text, removeComment, postId }) => {
	const handleRemove = () => {
		removeComment(postId, id);
	};

	return (
		<li className="Comment">
			<span onClick={handleRemove}>
				<FontAwesomeIcon icon={faTrash} />
			</span>
			{text}
		</li>
	);
};

export default Comment;
