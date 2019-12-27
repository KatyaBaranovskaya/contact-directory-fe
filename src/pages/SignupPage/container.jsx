import React from 'react';
import {navigate} from '@reach/router';

import SignupView from './view';
import ApiService from '../../services/apiService';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
      isSuccessfullySubmitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { isValid } = this.validate();

    if (isValid) {
      this.submit();
    }
  };

  validate = () => {
    return {
      errors: [],
      isValid: true,
    };
  };

  submit = () => {
    const { name, surname, lastname, email, password, confirmPassword } = this.state;
    this.setState({ isLoading: true });
    ApiService.call({
      method: 'post',
      url: '/auth/signup',
      data: { name, surname, lastname, email, password, confirmPassword }
    }, {
      isAuthorizedRequest: false
    })
      .then(() => {
        this.setState({ isLoading: false, isSuccessfullySubmitted: true });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { name, surname, lastname, email, password, confirmPassword, isLoading, isSuccessfullySubmitted } = this.state;

    return (
      <SignupView
        name={name}
        surname={surname}
        lastname={lastname}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default SignupPage;
