import React from 'react';
import { useDispatch } from 'react-redux';
import { addPostAndTitle } from './reducers/actions';
import BlogForm from './BlogForm';

const AddBlog = () => {
	const dispatch = useDispatch();
	const addBlog = (values) => {
		dispatch(addPostAndTitle(values));
	};

	return (
		<div className="AddBlog">
			<BlogForm saveBlog={addBlog} />
		</div>
	);
};

export default AddBlog;
