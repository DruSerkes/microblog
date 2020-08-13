import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = ({ addComment, blogs, removeComment }) => {
	const { id } = useParams();
	if (!blogs[id]) return null;
	const { comments } = blogs[id];

	return (
		<div className="Comments">
			<hr />
			<h3>Comments</h3>
			<ul>
				{comments.map((comment) => (
					<Comment
						id={comment.id}
						text={comment.text}
						removeComment={removeComment}
						postId={id}
						key={comment.id}
					/>
				))}
			</ul>
			<CommentForm addComment={addComment} />
		</div>
	);
};
export default Comments;
