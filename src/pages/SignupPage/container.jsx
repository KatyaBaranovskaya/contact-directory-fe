import React from 'react';
import {navigate} from '@reach/router';
import pick from 'lodash/pick';

import SignupView from './view';
import ApiService from '../../services/apiService';
import { validate } from '../../helpers/validation';
import schema from './schema';

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
      errors: {},
      isLoading: false,
      isSuccessfullySubmitted: false,
    };
  }

  handleChange = (event) => {
    const data = pick(this.state, ['name', 'surname', 'lastname', 'email', 'password', 'confirmPassword']);
    const { name, value } = event.target;

    data[name] = value;

    const { errors } = validate(schema, data);

    this.setState({ [name]: value, errors });
  };

  handleSubmit = () => {
    const { name, surname, lastname, email, password, confirmPassword } = this.state;
    const data = { name, surname, lastname, email, password, confirmPassword };

    const { errors, isValid } = validate(schema, data);
    this.setState({ errors });

    if (!isValid) {
      return;
    }

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
    const { name, surname, lastname, email, password, confirmPassword, errors, isLoading, isSuccessfullySubmitted } = this.state;

    return (
      <SignupView
        name={name}
        surname={surname}
        lastname={lastname}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        errors={errors}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default SignupPage;
