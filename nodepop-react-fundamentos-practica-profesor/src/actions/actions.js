import {types} from '../types/types';

export const authLoginRequest = () => {
  return {
    type: types.loginRequest,
  };
};

export const authLoginSuccess = (loggedUserId) => {
  return {
    type: types.loginSuccess,
    payload: loggedUserId,
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

export const advertsLoaded = (adverts) => {
  return {
    type: types.adsLoaded,
    payload: adverts,
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
