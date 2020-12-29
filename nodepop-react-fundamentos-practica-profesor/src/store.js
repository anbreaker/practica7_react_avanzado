import {createStore} from 'redux';
import {createAdvert} from './api/adverts';
import storage from './utils/storage';

//Actions const
const LOGGED_IN = 'LOGGED_IN';
const CREATE_AD = 'CREATE_AD';

const auth = storage.get('auth');
const initialState = {
  token: auth && auth.token ? auth.token : undefined,
};

//Reducer
async function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        token: action.token,
      };
    case CREATE_AD:
      const ad = await createAdvert(action.advert);
      action.history.push(`/adverts/${advert._id}`);
      return {
        adverts: [...state.adverts, ad],
      };
    default:
      return state;
  }
}

const store = createStore(appReducer);
store.subscribe(() => console.log(store.getState()));

export default store;
