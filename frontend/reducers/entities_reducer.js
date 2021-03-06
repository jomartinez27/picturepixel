import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import photosReducer from './photo_reducer';

export default combineReducers({
  users: usersReducer,
  photos: photosReducer
})
