import { combineReducers } from 'redux';
import comingsoonReducer from './ComingSoonReducer';
// import NavigationReducer from './NavigationReducer';

export default combineReducers({
	cmnSoonReducer: comingsoonReducer,
	// navigation: NavigationReducer
});
