import React from 'react';
import { useDispatch } from 'react-redux';
import { removeComment } from './reducers/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ id, text, postId }) => {
	const dispatch = useDispatch();
	const handleRemove = () => {
		dispatch(removeComment(postId, id));
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
