import { ADD_TITLE, EDIT_TITLE, REMOVE_TITLE } from './actionTypes';
const INITIAL_STATE = {};

const titleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TITLE:
			return { ...state, [action.id]: action.title };
		case REMOVE_TITLE:
			const updatedTitles = { ...state };
			delete updatedTitles[action.id];
			return { updatedTitles };
		case EDIT_TITLE:
			return { ...state, [action.id]: action.title };
		default:
			return state;
	}
};

export default titleReducer;
