import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const DELETE_SESSION_ERRORS = 'DELETE_SESSION_ERRORS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
)

export const receiveUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
})

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)))
)

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const deleteErrors = () => {
  return dispatch =>
      dispatch({ type: DELETE_SESSION_ERRORS })
}

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);
