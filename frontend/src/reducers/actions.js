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
		res.data.forEach((post) => dispatch(gotTitle(post.id, post)));
	};
}

export function getPost(id) {
	return async function(dispatch) {
		const res = await axios.get(`${BASE_URL}/${id}`);
		dispatch(gotPost(res.data.id, res.data));
	};
}

export function addPostAndTitle({ title, description, body }) {
	return async function(dispatch) {
		const data = { title, description, body };
		const res = await axios.post(BASE_URL, data);
		dispatch(gotPost(res.data.id, res.data));
	};
}

export function editPostAndTitle({ id, title, description, body }) {
	return async function(dispatch) {
		const data = { title, description, body };
		const res = await axios.put(`${BASE_URL}/${id}`, data);
		dispatch(editPost(res.data.id, res.data));
		dispatch(editTitle(res.data.id, res.data));
	};
}

export function removePostAndTitle(id) {
	return async function(dispatch) {
		try {
			await axios.delete(`${BASE_URL}/${id}`);
			dispatch(removePost(id));
			dispatch(removeTitle(id));
		} catch (e) {
			console.log(e);
		}
	};
}

export function gotTitle(id, title) {
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

export function gotPost(id, post) {
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

/* Comment functions */

export function addToComments(post_id, text) {
	return async function(dispatch) {
		const data = { text };
		const res = await axios.post(`${BASE_URL}/${post_id}/comments/`, data);
		dispatch(addComment(post_id, res.data));
	};
}

export function removeFromComments(post_id, comment_id) {
	return async function(dispatch) {
		try {
			await axios.delete(`${BASE_URL}/${post_id}/comments/${comment_id}`);
			dispatch(removeComment(post_id, comment_id));
		} catch (e) {
			console.log(e);
		}
	};
}

// export function getFromComments(post_id) {
// 	return async function(dispatch) {
// 		try{
// 			const res = await axios.get(`${BASE_URL}/${post_id}/comments/`)

// 		} catch(e) {
// 			console.log(e)
// 		}
// 	}
// }

export function addComment(post_id, comment) {
	return {
		type    : ADD_COMMENT,
		post_id,
		comment
	};
}

export function removeComment(post_id, commentId) {
	return {
		type      : REMOVE_COMMENT,
		post_id,
		commentId
	};
}
