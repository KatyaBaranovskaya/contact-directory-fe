import React from 'react';
import { NotificationManager } from 'react-notifications';
import { navigate } from '@reach/router';

import ContactEditPageView from './view';
import ApiService from '../../services/apiService';

class ContactEditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { contactId } = this.props;

    ApiService.call({
      method: 'get',
      url: `/contacts/${contactId}`,
    })
      .then((response) => {
        const { data } = response;
        const newState = {
          data: {
            ...data,
            birthday: data.birthday && new Date(data.birthday),
            imageSrc: null,
          },
          isLoaded: true,
        };

        if (!data.photo) {
          return this.setState(newState);
        }

        ApiService.call({
          method: 'get',
          url: `/files/${data.id}`,
        })
          .then((file) => {
            newState.data.imageSrc = file.data.entity
              ? 'data:image/PNG;base64,' + file.data.entity
              : null;

            this.setState(newState);
          })
          .catch(() => {
            this.setState(newState);
          });
      })
      .catch((error) => {
        console.log(error);
        navigate(`/error?error=${error.response.data.message}`);
      });
  };

  handleSubmit = (data, photo) => {
    const formData = new FormData();
    if (photo) {
      formData.append('photo', photo);
    }
    formData.append('contact', new Blob([JSON.stringify(data)], {type: 'application/json'}));

    ApiService.call({
      headers: {'Content-Type': 'multipart/form-data' },
      method: 'put',
      url: '/contacts',
      data: formData
    })
      .then(() => {
        NotificationManager.success('Contact was updated successfully', 'Successfully');
        navigate('/contacts');
      })
      .catch((error) => {
        console.log(error);
        navigate(`/error?error=${error.response.data.message}`);
      });
  };

  render() {
    const { data, isLoaded } = this.state;

    return (
      <ContactEditPageView
        initialData={data}
        isLoaded={isLoaded}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default ContactEditPage;
