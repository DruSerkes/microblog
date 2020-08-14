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

// export function addPostAndTitle({id, title, description, })

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
