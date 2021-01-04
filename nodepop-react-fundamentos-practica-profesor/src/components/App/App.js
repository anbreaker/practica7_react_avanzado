import React from 'react';
import T from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import {PrivateRoute, LoginPage} from '../auth';
import {AdvertPage, AdvertsPage, NewAdvertPage} from '../adverts';
import NotFoundPage from './NotFoundPage';

function App({isLogged, authLogin}) {
  const handleLogin = () => {
    const isLogged = true;
    authLogin(isLogged);
    return isLogged;
  };

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/adverts" />
      </Route>
      <Route path="/login" exact>
        {(routerProps) => <LoginPage onLogin={handleLogin} {...routerProps} />}
      </Route>
      <PrivateRoute path="/adverts" exact>
        <AdvertsPage />
      </PrivateRoute>
      <PrivateRoute path="/adverts/new" exact component={NewAdvertPage} />
      <PrivateRoute path="/adverts/:id" exact component={AdvertPage} />
      <Route path="/404" exact>
        {NotFoundPage}
      </Route>
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool,
};

export default App;
