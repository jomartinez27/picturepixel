import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import photos from './photo_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  photos
});

export default rootReducer;
