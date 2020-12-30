import {LOGGED_IN, LOGGED_OUT} from './types';

export const authLogin = (loggedUserId) => {
  return {
    type: LOGGED_IN,
    payload: {
      loggedUserId,
    },
  };
};

export const authLogout = () => {
  return {
    type: LOGGED_OUT,
  };
};
