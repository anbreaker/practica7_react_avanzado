import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {configureClient} from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/App';
import {store} from './store/store';

// import {authLogin} from './actions/actions';

// Read token from storage
const {token} = storage.get('auth') || {token: null};

// Configure api client
configureClient(token);

// store.dispatch(authLogin('id'));

ReactDOM.render(
  <BrowserRouter>
    {/* dispatch={store.dispatch} loggedUserId={token} ... luego se arregla???... cosas del profe... */}
    <App isInitiallyLogged={!!token} dispatch={store.dispatch} loggedUserId={token} />
  </BrowserRouter>,
  document.getElementById('root')
);
