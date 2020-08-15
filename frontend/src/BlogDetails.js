import React, { useCallback, useEffect } from 'react';
import BlogForm from './BlogForm';
import Comments from './Comments';
import CommentForm from './CommentForm';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import {
	removePostAndTitle,
	editPostAndTitle,
	addToComments,
	removeFromComments,
	getPost,
	vote
} from './reducers/actions';

const BlogDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const postFromRedux = useSelector((state) => state.posts[id], shallowEqual) || {};
	const { title, description, body, comments, votes } = postFromRedux;

	const upVote = (post_id) => {
		dispatch(vote(post_id, 'up'));
	};

	const downVote = (post_id) => {
		dispatch(vote(post_id, 'down'));
	};

	useEffect(
		() => {
			dispatch(getPost(id));
		},
		[ dispatch, id ]
	);

	const handleRemove = () => {
		dispatch(removePostAndTitle(id));
		history.push('/');
	};

	const updateBlog = (values) => {
		dispatch(editPostAndTitle(values));
	};

	const handleAddComment = useCallback(
		(text) => {
			dispatch(addToComments(id, text));
		},
		[ dispatch, id ]
	);

	const handleRemoveComment = useCallback(
		(postId, commentId) => {
			dispatch(removeFromComments(postId, commentId));
		},
		[ dispatch ]
	);

	if (!postFromRedux) return <h3>Sorry, we can't find your post!</h3>;

	const toggleEditForm = () => {
		const form = document.querySelector('.BlogDetails-Edit-BlogForm');
		if (form.style.display === 'none') {
			form.style.display = 'block';
		} else {
			form.style.display = 'none';
		}
	};

	return (
		<div className="BlogDetails">
			<div className="BlogDetails-Edit-BlogForm" style={{ display: 'none' }}>
				<BlogForm title={title} description={description} body={body} id={id} saveBlog={updateBlog} />
			</div>
			<h2>
				{title}
				<span>
					<br />
					{votes} votes
					<button onClick={() => upVote(id)}>
						<FontAwesomeIcon icon={faThumbsUp} />
					</button>
					<button onClick={() => downVote(id)}>
						<FontAwesomeIcon icon={faThumbsDown} />
					</button>
				</span>
			</h2>
			<div className="BlogDetails-Icons">
				<span>
					<button onClick={toggleEditForm}>
						<FontAwesomeIcon icon={faEdit} />
					</button>
					<button onClick={handleRemove}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</button>
				</span>
				{/* <span>
					{votes} votes
					<button>
						<FontAwesomeIcon icon={faThumbsUp} />
					</button>
					<button>
						<FontAwesomeIcon icon={faThumbsDown} />
					</button>
				</span> */}
			</div>
			<p>
				<em>{description}</em>
			</p>
			<p>{body}</p>
			{comments ? <Comments id={id} comments={comments} removeComment={handleRemoveComment} /> : null}
			<CommentForm addComment={handleAddComment} />
		</div>
	);
};

export default BlogDetails;
