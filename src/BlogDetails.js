import React from 'react';
import BlogForm from './BlogForm';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = ({ blogs, saveBlog, removeBlog }) => {
	const { id } = useParams();
	if (!blogs[id]) {
		return <h3>Sorry we can't find your post!!</h3>;
	}
	const { title, description, body } = blogs[id];

	const handleRemove = () => {
		removeBlog(id);
	};

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
				<BlogForm title={title} description={description} body={body} id={id} saveBlog={saveBlog} />
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
		</div>
	);
};

export default BlogDetails;
