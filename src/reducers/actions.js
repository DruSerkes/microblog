import { ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, EDIT_POST } from './actionTypes';

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
