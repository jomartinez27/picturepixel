import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_SINGLE_USER:
      return merge({}, state, { [action.user.id]: action.user })
    default:
      return state;
  }
};

export default usersReducer;
