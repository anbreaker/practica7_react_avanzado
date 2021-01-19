import client from './client';
import storage from '../utils/storage';
// Iniciando store clase...
// import {store} from '../store/store';

export const login = ({remember, ...credentials}) => client.login(credentials);

export const logout = () =>
  client.logout().then(() => {
    storage.remove('auth');
  });
