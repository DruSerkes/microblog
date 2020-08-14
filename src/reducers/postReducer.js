import { ADD_POST, EDIT_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from './actionTypes';
const INITIAL_STATE = {};

const postReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_POST:
			return { ...state, posts: { ...state.posts, [action.id]: action.post } };
		case REMOVE_POST:
			const updatedPosts = { ...state.posts };
			delete updatedPosts[action.id];
			return { ...state, posts: updatedPosts };
		case EDIT_POST:
			return {
				...state,
				posts : {
					...state.posts,
					[action.id]: {
						...state.posts[action.id],
						title       : action.post.title,
						description : action.post.description,
						body        : action.post.body
					}
				}
			};
		case ADD_COMMENT:
			const postToAddTo = state.posts[action.id];
			postToAddTo.comments = [ ...postToAddTo.comments, action.comment ];
			return { ...state, posts: { ...state.posts, [action.id]: postToAddTo } };
		case REMOVE_COMMENT:
			const postToRemoveFrom = state.posts[action.id];
			const newComments = postToRemoveFrom.comments.filter((comment) => comment.id !== action.commentId);
			postToRemoveFrom.comments = newComments;
			return { ...state, posts: { ...state.posts, [action.id]: postToRemoveFrom } };
		default:
			return state;
	}
};

export default postReducer;
