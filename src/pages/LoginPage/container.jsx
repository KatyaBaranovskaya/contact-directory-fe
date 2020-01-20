import React from 'react';
import { navigate } from '@reach/router';

import LoginPageView from './view';
import ApiService from '../../services/apiService';
import { APP_LIFE_CYCLE_EVENTS, AppLifecycle } from '../../services/events/appLifecycle';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
      isLoading: false,
      isSuccessfullySubmitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    ApiService.call({
      method: 'post',
      url: '/auth/login',
      data: { email, password }
    }, {
      isAuthorizedRequest: false
    })
      .then((response) => {
        this.setState({ isLoading: false, isSuccessfullySubmitted: true, error: null });
        AppLifecycle.emit(APP_LIFE_CYCLE_EVENTS.LOGIN, response.data.token, () => navigate('/'));
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status !== 401) {
          return navigate(`/error?error=${error.response.data.message}`);
        }

        this.setState({
          isLoading: false,
          error: 'Credentials incorrect, please check login and password',
        });
      });
  };

  render() {
    const { email, password, error, isLoading, isSuccessfullySubmitted } = this.state;

    return (
      <LoginPageView
        email={email}
        password={password}
        error={error}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default LoginPage;
