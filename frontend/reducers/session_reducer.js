import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash';

const _null_session = { id: null }

const sessionReducer = (oldState = _null_session, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({id : action.user.id});
    case LOGOUT_CURRENT_USER:
      delete newState[action.user.id];
      return newState;
    default:
      return newState;
  }
}

export default sessionReducer;
