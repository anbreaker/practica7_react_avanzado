import React from 'react';
import T from 'prop-types';
import {Alert, Divider} from 'antd';

import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';
import store from '../../../store/store';

class NewAdvertPage extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = (advert) => {
    const {history} = this.props;
    this.resetError();
    //Llamada al dispatch, se ejecuta la accion...
    store.dispatch({type: 'createdAd', advert, history});
  };

  resetError = () => this.setState({error: null});

  render() {
    const {error} = this.state;
    return (
      <Layout title="New advert">
        <Divider>Create an advert</Divider>
        <NewAdvertForm onSubmit={this.handleSubmit} />
        {error && (
          <Alert
            afterClose={this.resetError}
            closable
            message={error}
            showIcon
            type="error"
          />
        )}
      </Layout>
    );
  }
}

NewAdvertPage.propTypes = {
  history: T.shape({push: T.func.isRequired}).isRequired,
};

export default NewAdvertPage;
