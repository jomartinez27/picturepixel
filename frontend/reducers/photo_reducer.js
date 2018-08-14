import { RECEIVE_PHOTO, RECEIVE_PHOTOS, RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge(newState, {[action.photo.id]: action.photo})
    case RECEIVE_PHOTOS:
      return merge(newState, action.photos);
    default:
      return state;
  }
}

export default photoReducer;
