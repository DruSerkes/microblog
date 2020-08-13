import React from 'react';
import BlogForm from './BlogForm';
import { useParams } from 'react-router-dom';

const BlogDetails = ({ blogs, saveBlog, removeBlog }) => {
	const { id } = useParams();
	console.log(blogs);
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
			<p>
				<span onClick={handleEdit}>
					<i class="fas fa-edit" />
				</span>{' '}
				<span onClick={handleRemove}>
					<i class="fas fa-trash-alt" />
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
