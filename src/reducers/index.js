import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books : BookReducer,
  activeBooks : ActiveBookReducer
});

export default rootReducer;
