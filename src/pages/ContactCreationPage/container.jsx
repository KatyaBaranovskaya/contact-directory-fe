import React from 'react';
import { NotificationManager } from 'react-notifications';
import { navigate } from '@reach/router';

import ContactCreationPageView from './view';
import ApiService from '../../services/apiService';

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
        NotificationManager.success('Contact was created successfully', 'Successfully');
        navigate('/contacts');
      })
      .catch((error) => {
        console.log(error);
        navigate(`/error?error=${error.response.data}`);
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
