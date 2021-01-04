import {LOGGED_IN, LOGGED_OUT, CREATED_AD} from './types';
import storage from '../utils/storage';

const auth = storage.get('auth');
const initialState = {
  token: auth && auth.token ? auth.token : undefined,
};

//Reducer
function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {...state, token: action.payload.loggedUserId};
    case LOGGED_OUT:
      return {
        ...state,
        auth: initialState.token,
      };
    // case CREATE_AD:
    //   const ad = createAdvert(action.advert);
    //   action.history.push(`/adverts/${advert._id}`);
    //   return {
    //     adverts: [...state.adverts, ad],
    //   };
    default:
      return state;
  }
}

export default appReducer;
