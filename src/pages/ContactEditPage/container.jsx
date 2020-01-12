import React from 'react';

import ContactEditPageView from './view';
import ApiService from '../../services/apiService';
import { navigate } from '@reach/router';

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

      if (data.photo) {
        ApiService.call({
          method: 'get',
          url: `/files/${data.id}`,
        })
          .catch(() => {
            return null;
          })
          .then((file) => {
            const imageSrc = file
              ? 'data:image/PNG;base64,' + file.data.entity
              : null;

            this.setState({
              data: {
                ...data,
                imageSrc,
              },
              isLoaded: true,
            });
          });
      } else {
        this.setState({
          data: {
            ...data,
            imageSrc: null,
          },
          isLoaded: true,
        });
      }
    })
      .catch((error) => {
        console.log(error);
        // TODO
      });
  };

  handleSubmit = (data) => {
    const formData = new FormData();
    formData.append('contact', new Blob([JSON.stringify(data)], {type: 'application/json'}));

    ApiService.call({
      headers: {'Content-Type': 'multipart/form-data' },
      method: 'put',
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
