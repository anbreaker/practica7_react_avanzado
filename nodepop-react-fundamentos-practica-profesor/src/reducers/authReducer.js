import {types} from '../types/types';
import storage from '../utils/storage';

const auth = storage.get('auth');

const initialState = auth && auth.token ? auth.token : null;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginSuccess:
      return action.token;

    case types.logout:
      return null;

    default:
      return state;
  }
};
