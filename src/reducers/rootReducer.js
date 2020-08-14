import titleReducer from './titleReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ posts: postReducer, titles: titleReducer });

export default rootReducer;
