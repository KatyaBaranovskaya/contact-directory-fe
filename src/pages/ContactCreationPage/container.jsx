import React from 'react';

import ContactCreationPageView from './view';
import ApiService from '../../services/apiService';
import { navigate } from '@reach/router';

class ContactCreationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (data, photo) => {
    const formData = new FormData();
    if (photo) {
      formData.append('photo', photo);
    }
    formData.append('contact', new Blob([JSON.stringify(data)], {type: 'application/json'}));

    ApiService.call({
      headers: {'Content-Type': 'multipart/form-data' },
      method: 'post',
      url: '/contacts',
      data: formData
    })
      .then(() => {
        navigate('/contacts');
      })
      .catch((error) => {
        console.log(error);
      });
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
