import client from './client';
import storage from '../utils/storage';
import store from '../store';

export const login = ({remember, ...credentials}) =>
  client.login(credentials).then((auth) => {
    if (remember) {
      storage.set('auth', auth);
    }
    store.dispatch({type: 'LOGGED_IN', token: auth.token});
  });

export const logout = () =>
  client.logout().then(() => {
    storage.remove('auth');
  });
