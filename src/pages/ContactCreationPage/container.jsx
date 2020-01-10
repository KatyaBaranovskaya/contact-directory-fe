import React from 'react';

import ContactCreationPageView from './view';

class ContactCreationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <ContactCreationPageView
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default ContactCreationPage;
