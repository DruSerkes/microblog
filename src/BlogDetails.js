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

	const handleEdit = () => {
		return <BlogForm title={title} description={description} body={body} id={id} saveBlog={saveBlog} />;
	};

	return (
		<div className="BlogDetails">
			<h2>{title}</h2>
			<p className="BlogDetails-Icons">
				<span onClick={handleEdit}>
					<FontAwesomeIcon icon={faEdit} />
				</span>
				<span onClick={handleRemove}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</span>
			</p>
			<p>
				<em>{description}</em>
			</p>
			<p>{body}</p>
		</div>
	);
};

export default BlogDetails;
