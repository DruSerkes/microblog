import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
const INITIAL_STATE = {};

const postReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_POST:
			return { ...state, posts: { ...posts, [action.id]: action.post } };
		case REMOVE_POST:
			const updatedPosts = { ...state.posts };
			delete updatedPosts[action.id];
			return { ...state, posts: updatedPosts };
		case EDIT_POST:
			return { ...state, posts: { ...posts, [action.id]: action.post } };
		case ADD_COMMENT:
			const post = state.posts[action.id];
			post.comments = [ ...post.comments, action.comment ];
			return { ...state, posts: { ...posts, [action.id]: post } };
		case REMOVE_COMMENT:
			const post = state.posts[action.id];
			const newComments = post.comments.filter((comment) => comment.id !== action.commentId);
			post.comments = newComments;
			return { ...state, posts: { ...posts, [action.id]: post } };
		default:
			return state;
	}
};

export default postReducer;
