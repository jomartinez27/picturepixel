import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(user => dispatch(logoutCurrentUser()))
)

export const receiveErrors = errors => ({
  type: RECEIVE_CURRENT_USER,
  errors
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})
