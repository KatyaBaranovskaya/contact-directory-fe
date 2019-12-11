import React from 'react';

import ContactsPageView from './view';

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
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
    const { name } = this.state;

    return (
      <ContactsPageView
        name={name}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default ContactsPage;
