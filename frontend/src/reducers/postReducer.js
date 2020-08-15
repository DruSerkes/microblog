import { ADD_POST, VOTE, EDIT_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
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
			return {
				...state,
				[action.post_id]: {
					...state[action.post_id],
					comments : [ ...state[action.post_id].comments, action.comment ]
				}
			};
		case REMOVE_COMMENT:
			const postToRemoveFrom = state[action.post_id];
			const newComments = postToRemoveFrom.comments.filter((comment) => comment.id !== action.commentId);
			postToRemoveFrom.comments = newComments;
			return {
				...state,
				[action.post_id]: {
					...state[action.post_id],
					comments : [ ...newComments ]
				}
			};
		case VOTE:
			return {
				...state,
				[action.post_id]: {
					...state[action.post_id],
					votes : action.votes
				}
			};
		default:
			return state;
	}
};

export default postReducer;
