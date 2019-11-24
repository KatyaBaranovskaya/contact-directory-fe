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

  render() {
    const { email } = this.state;

    return (
      <LoginPageView
        email={email}
        onChange={this.handleChange}
      />
    );
  }
}

export default LoginPage;
