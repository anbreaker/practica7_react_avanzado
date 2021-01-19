import {types} from '../types/types';

const initialState = {
  adverts: null,
  tags: null,
  advert: null,
};

export const adReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.adsLoaded:
      return {
        ...state,
        adverts: action.payload.adverts,
      };

    case types.adLoaded:
      return {
        ...state,
        advert: action.payload.advert,
      };

    case types.adDelete:
      //filter
      return action.payload.advertId;

    case types.adTags:
      return action.payload.tags;

    case types.adCreate:
      if (!state) {
        return [action.payload.advert];
      }
      return [...state, action.payload.advert];

    default:
      return state;
  }
};
