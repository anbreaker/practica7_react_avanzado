import {types} from '../types/types';
import {login} from '../api/auth';
import storage from '../utils/storage';

export const authLoginRequest = (email, password, remember = false) => {
  return (dispatch) => {
    login({email, password})
      .then(({token}) => {
        if (remember) storage.set('token', token);
        dispatch(authLoginSuccess(token));
      })
      .catch((error) => {
        console.error('Error ->', error);
      });
  };
};

export const authLoginSuccess = (token) => {
  return {
    type: types.loginSuccess,
    token,
  };
};

export const authLoginFailure = (error) => {
  return {
    type: types.loginFailure,
    error: true,
    payload: error,
  };
};

export const authLogout = () => {
  return {
    type: types.logout,
  };
};

export const advertsLoaded = () => {
  return {
    type: types.adsLoaded,
    payload: {},
  };
};

export const advertLoaded = (advert) => {
  return {
    type: types.adLoaded,
    payload: advert,
  };
};

export const advertCreated = (advert) => {
  return {
    type: types.adCreate,
    payload: advert,
  };
};

export const advertsTags = (tags) => {
  return {
    type: types.adTags,
    payload: tags,
  };
};

export const advertDeleted = (advertId) => {
  return {
    type: types.adDelete,
    payload: advertId,
  };
};
