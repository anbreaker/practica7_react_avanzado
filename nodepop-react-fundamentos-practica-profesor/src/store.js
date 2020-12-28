import {createStore} from 'redux';
import storage from './utils/storage';

const auth = storage.get('auth');
const initialState = {
  token: auth && auth.token ? auth.token : undefined,
};

//Reducer
function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'loggedIn':
      return {
        token: action.token,
      };

    default:
      return state;
  }
}

const store = createStore(appReducer);
store.subscribe(() => console.log(store.getState()));

export default store;
