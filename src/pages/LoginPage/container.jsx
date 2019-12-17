import React from 'react';
import axios from 'axios';

import LoginPageView from './view';
import ApiService from '../../services/apiService';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
        this.setState({ isLoading: false, isSuccessfullySubmitted: true });
        ApiService.setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { email, password, isLoading, isSuccessfullySubmitted } = this.state;

    return (
      <LoginPageView
        email={email}
        password={password}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default LoginPage;
