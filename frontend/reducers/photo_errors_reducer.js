import { RECEIVE_PHOTO_ERRORS, RECEIVE_PHOTO, DELETE_PHOTO_ERRORS } from '../actions/photo_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case RECEIVE_PHOTO:
      return [];
    case DELETE_PHOTO_ERRORS:
      return [];
    default:
      return state;
  }
}
