import {
	ADD_COMMENT,
	ADD_POST,
	REMOVE_COMMENT,
	REMOVE_POST,
	EDIT_POST,
	ADD_TITLE,
	EDIT_TITLE,
	REMOVE_TITLE
} from './actionTypes';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/posts';

export function getTitles() {
	return async function(dispatch) {
		const res = await axios.get(BASE_URL);
		console.log(res.data);
		res.data.forEach((post) => dispatch(addTitle(post.id, post)));
	};
}

export function addPostAndTitle({ id, title, description, body }) {
	return function(dispatch) {
		const newTitle = { id, title, description };
		const post = { id, title, description, body, comments: [] };
		dispatch(addPost(id, post));
		dispatch(addTitle(id, newTitle));
	};
}

export function editPostAndTitle({ id, title, description, body }) {
	return function(dispatch) {
		const newTitle = { id, title, description };
		const post = { id, title, description, body };
		dispatch(editPost(id, post));
		dispatch(editTitle(id, newTitle));
	};
}

export function removePostAndTitle(id) {
	return function(dispatch) {
		dispatch(removePost(id));
		dispatch(removeTitle(id));
	};
}

export function addTitle(id, title) {
	return {
		type  : ADD_TITLE,
		id,
		title
	};
}

export function editTitle(id, title) {
	return {
		type  : EDIT_TITLE,
		id,
		title
	};
}

export function removeTitle(id) {
	return {
		type : REMOVE_TITLE,
		id
	};
}

export function addPost(id, post) {
	return {
		type : ADD_POST,
		post,
		id
	};
}

export function editPost(id, post) {
	return {
		type : EDIT_POST,
		id,
		post
	};
}

export function removePost(id) {
	return {
		type : REMOVE_POST,
		id
	};
}

export function addComment(id, comment) {
	return {
		type    : ADD_COMMENT,
		id,
		comment
	};
}

export function removeComment(id, commentId) {
	return {
		type      : REMOVE_COMMENT,
		id,
		commentId
	};
}
