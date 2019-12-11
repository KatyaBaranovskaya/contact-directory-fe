import React from 'react';

import ResetPasswordPageView from './view';

class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { password, confirmPassword } = this.state;

    return (
      <ResetPasswordPageView
        password={password}
        confirmPassword={confirmPassword}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default ResetPasswordPage;
