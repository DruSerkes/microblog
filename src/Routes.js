import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BlogForm from './BlogForm';
import Homepage from './Homepage';
import BlogDetails from './BlogDetails';
import Comments from './Comments';
import AddBlog from './AddBlog';

const Routes = () => {
	const [ blogs, setBlogs ] = useState({});

	const saveBlog = ({ title, description, body, id }) => {
		if (id in blogs) {
			setBlogs((blogs) => ({ ...blogs, [id]: { ...blogs[id], title, description, body, id } }));
		} else {
			setBlogs((blogs) => ({ ...blogs, [id]: { title, description, body, id, comments: [] } }));
		}
	};

	const removeBlog = (id) => {
		const updatedBlogs = { ...blogs };
		delete updatedBlogs[id];
		setBlogs(updatedBlogs);
	};

	const addComment = (id, commentId, text) => {
		const post = blogs[id];
		const newComment = { id: commentId, text };
		post.comments = [ ...post.comments, newComment ];
		setBlogs((blogs) => ({ ...blogs, [id]: post }));
	};

	const removeComment = (id, commentId) => {
		const post = blogs[id];
		const newComments = post.comments.filter((comment) => comment.id !== commentId);
		post.comments = newComments;
		setBlogs((blogs) => ({ ...blogs, [id]: post }));
	};

	return (
		<Switch>
			<Route exact path="/add">
				{/* <BlogForm saveBlog={saveBlog} /> */}
				<AddBlog />
			</Route>
			<Route exact path="/:id">
				<BlogDetails saveBlog={saveBlog} removeBlog={removeBlog} blogs={blogs} />
				<Comments addComment={addComment} blogs={blogs} removeComment={removeComment} />
				{/* 
				TODO move Comments into BlogDetails
				BlogDetails handles all Redux, passes down needed logic to children
				*/}
			</Route>
			<Route exact path="/">
				{/* <h2>Blog</h2> */}
				<Homepage blogs={blogs} />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
