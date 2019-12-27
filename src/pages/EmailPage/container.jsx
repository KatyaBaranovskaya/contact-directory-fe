import React from 'react';

import EmailPageView from './view';

class EmailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      text: '',
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
    const { email, text } = this.state;

    return (
      <EmailPageView
        email={email}
        text={text}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default EmailPage;
