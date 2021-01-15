import React, {useState} from 'react';
import T from 'prop-types';
import {Alert, Col, Row, Typography} from 'antd';
import {Redirect} from 'react-router-dom';

import {login} from '../../../api/auth';
import LoginForm from './LoginForm';
import storage from '../../../utils/storage';

const {Title} = Typography;

// function LoginPage({loginReques, loginSucces, loginFailure...})

function LoginPage(props) {
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const handleSubmit = (credentials) => {
    const {onLogin, location, history} = props;

    resetError();
    login(credentials)
      .then(() => {
        onLogin(() => {
          // Navigate to previously required route
          const {from} = location.state || {from: {pathname: '/'}};
          history.replace(from);
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const auth = storage.get('auth');
  if (auth) return <Redirect to="/adverts" />;
  return (
    <Row>
      <Col span={8} offset={8} style={{marginTop: 64}}>
        <Title style={{textAlign: 'center'}}>Log In</Title>
        <LoginForm onSubmit={handleSubmit} />
        {error && (
          <Alert
            afterClose={resetError}
            closable
            message={error}
            showIcon
            type="error"
            style={{marginTop: 24}}
          />
        )}
      </Col>
    </Row>
  );
}

LoginPage.propTypes = {
  onLogin: T.func.isRequired,
  history: T.shape({replace: T.func.isRequired}).isRequired,
  location: T.shape({
    state: T.shape({from: T.shape({pathname: T.string})}),
  }).isRequired,
};

export default LoginPage;
