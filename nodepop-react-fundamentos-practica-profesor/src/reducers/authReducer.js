import {types} from '../types/types';
import storage from '../utils/storage';

const auth = storage.get('auth');
const initialState = {
  token: auth && auth.token ? auth.token : undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        token: action.payload.loggedUserId,
      };

    case types.logout:
      return {
        ...state,
        auth: initialState.token,
      };

    default:
      return state;
  }
};
