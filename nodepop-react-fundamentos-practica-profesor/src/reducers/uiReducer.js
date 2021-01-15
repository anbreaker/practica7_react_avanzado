import {types} from '../types/types';

const initialState = {
  ui: {
    loading: false,
    error: null,
  },
};

export const uiReducer = (state = initialState, action) => {
  if (action.error) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  switch (action.type) {
    case types.loginRequest:
      return {
        ...state,
        loading: true,
      };

    case types.loginSuccess:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case types.loginFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
