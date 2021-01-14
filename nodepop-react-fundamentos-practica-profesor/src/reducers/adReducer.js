import {types} from '../types/types';

const initialState = {
  auth: null,
  adverts: null,
  tags: null,
  advert: null,
};

export const adverts = (state = initialState.adverts, action) => {
  switch (action.type) {
    case types.adsLoaded:
      return action.payload.adverts;

    case types.adLoaded:
      return action.payload.advert;

    case types.adDelete:
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
