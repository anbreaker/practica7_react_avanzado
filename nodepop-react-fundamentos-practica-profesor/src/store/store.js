import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import appReducer from './reducers';

export function configureStore(preloadedState) {
  const store = createStore(appReducer, preloadedState, composeWithDevTools());

  return store;
}
