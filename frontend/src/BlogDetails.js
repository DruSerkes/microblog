import React, { useCallback, useEffect } from 'react';
import BlogForm from './BlogForm';
import Comments from './Comments';
import CommentForm from './CommentForm';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { removePostAndTitle, editPostAndTitle, addToComments, removeFromComments, getPost } from './reducers/actions';

const BlogDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const postFromRedux = useSelector((state) => state.posts[id]);

	useEffect(
		() => {
			console.log('dispatching for post');
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

	const { title, description, body } = postFromRedux;

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
			<h2>{title}</h2>
			<p className="BlogDetails-Icons">
				<button onClick={toggleEditForm}>
					<FontAwesomeIcon icon={faEdit} />
				</button>
				<button onClick={handleRemove}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</p>
			<p>
				<em>{description}</em>
			</p>
			<p>{body}</p>
			<Comments id={id} comments={postFromRedux.comments} removeComment={handleRemoveComment} />
			<CommentForm addComment={handleAddComment} />
		</div>
	);
};

export default BlogDetails;
