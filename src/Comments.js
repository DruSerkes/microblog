import React from 'react';
import Comment from './Comment';

const Comments = ({ id, comments }) => {
	return (
		<div className="Comments">
			<hr />
			<h3>Comments</h3>
			<ul>
				{comments.map((comment) => (
					<Comment id={comment.id} text={comment.text} postId={id} key={comment.id} />
				))}
			</ul>
		</div>
	);
};
export default Comments;
