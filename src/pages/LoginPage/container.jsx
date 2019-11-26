import React from 'react';

import LoginPageView from './view';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;

    return (
      <LoginPageView
        email={email}
        password={password}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default LoginPage;
