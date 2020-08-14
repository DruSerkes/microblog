import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
const INITIAL_STATE = {};

const postReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_POST:
			return { ...state, [action.id]: action.post };
		case REMOVE_POST:
			const updatedPosts = { ...state };
			delete updatedPosts[action.id];
			return { ...updatedPosts };
		case EDIT_POST:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					title       : action.post.title,
					description : action.post.description,
					body        : action.post.body
				}
			};
		case ADD_COMMENT:
			const postToAddTo = state[action.id];
			postToAddTo.comments = [ ...postToAddTo.comments, action.comment ];
			return { ...state, [action.id]: postToAddTo };
		case REMOVE_COMMENT:
			const postToRemoveFrom = state[action.id];
			const newComments = postToRemoveFrom.comments.filter((comment) => comment.id !== action.commentId);
			postToRemoveFrom.comments = newComments;
			return { ...state, [action.id]: postToRemoveFrom };
		default:
			return state;
	}
};

export default postReducer;
