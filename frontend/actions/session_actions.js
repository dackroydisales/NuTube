import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// regular actions
export const receiveCurrentUser = currentUser => {
  return ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})
};

export const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER
  })
};

export const receiveErrors = errors => {
  return ({
  type: RECEIVE_SESSION_ERRORS,
  errors
  })
};

//thunk action creators


export const signup = user => dispatch => {
  // NB: handle expected signup errors
  APIUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
};

export const login = user => dispatch => {
  // NB: handle expected login errors
  return APIUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()))
};

