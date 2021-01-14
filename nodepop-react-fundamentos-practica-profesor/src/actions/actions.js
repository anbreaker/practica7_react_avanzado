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
