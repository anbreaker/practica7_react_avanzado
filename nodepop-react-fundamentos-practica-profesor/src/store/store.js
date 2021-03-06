import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {adReducer} from '../reducers/adReducer';

import {authReducer} from '../reducers/authReducer';

const reducers = combineReducers({
  auth: authReducer,
  // ui: uiReducer,
  ads: adReducer,
});

const middlewares = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
