import {types} from '../types/types';

export const authLogin = (loggedUserId) => {
  return {
    type: types.login,
    payload: {
      loggedUserId,
    },
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
    payload: {
      adverts,
    },
  };
};

export const advertLoaded = (advert) => {
  return {
    type: types.adLoaded,
    payload: {
      advert,
    },
  };
};

export const advertCreated = (advert) => {
  return {
    type: types.adCreate,
    payload: {
      advert,
    },
  };
};

export const advertsTags = (tags) => {
  return {
    type: types.adTags,
    payload: {
      tags,
    },
  };
};

export const advertDeleted = (advertId) => {
  return {
    type: types.adDelete,
    payload: {
      advertId,
    },
  };
};
