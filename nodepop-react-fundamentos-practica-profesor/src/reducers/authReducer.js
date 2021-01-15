import {types} from '../types/types';
import storage from '../utils/storage';

const auth = storage.get('auth');

const initialState = {
  auth: auth && auth.token ? auth.token : null,
  ads: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginSuccess:
      return {
        ...state,
        auth: action.payload,
      };

    case types.logout:
      return {
        ...state,
        auth: null,
      };

    default:
      return state;
  }
};
