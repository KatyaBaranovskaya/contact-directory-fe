import React from 'react';

import SignupView from './view';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    console.log('submit');
  };

  render() {
    const { name, surname, email, password, confirmPassword } = this.state;

    return (
      <SignupView
        name={name}
        surname={surname}
        email={email}
        password={password}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default SignupPage;
