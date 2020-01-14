import React from 'react';
import queryString from 'query-string'
import { NotificationManager } from 'react-notifications';
import { navigate } from '@reach/router';

import EmailPageView from './view';
import ApiService from '../../services/apiService';
import schema from './schema';

class EmailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emails: '',
      title: '',
      message: '',
      errors: {},
      isLoading: false,
      isSuccessfullySubmitted: false,
    };
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    const { ids } = queryParams;
    if (ids) {
      this.fetchData(ids);
    }
  }

  fetchData = (ids) => {
    ApiService.call({
      method: 'get',
      url: `/contacts/email?id=${ids}`,
    })
      .then((response) => {
        const emails = response.data.map(record => record.email);
        this.setState({ emails: emails.join(',') });
      })
      .catch((error) => {
        console.log(error);
        navigate('/contacts');
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      const { emails, title, message } = this.state;
      this.validate({ emails, title, message });
    });
  };

  validate = (data) => {
    const { error } = schema.validate(data, { abortEarly: false });

    if (!error) {
      this.setState({ errors: {} });
      return true;
    }

    const errors = error.details.reduce(( acc, { path, message }) => ({
      ...acc,
      [path.join('.')]: message,
    }), {});

    this.setState({ errors });

    return false;
  };

  handleSubmit = () => {
    const { emails, title, message } = this.state;
    const data = { emails, title, message };

    const isValid = this.validate(data);

    if (isValid) {
      this.setState({ isLoading: true });
      ApiService.call({
        method: 'post',
        url: '/contacts/email',
        data: {
          ...data,
          emails: emails.split(','),
        }
      })
        .then(() => {
          this.setState({ isLoading: false, isSuccessfullySubmitted: true });
          NotificationManager.success('Message was sent successfully', 'Successfully');
          navigate('/contacts');
        })
        .catch((error) => {
          console.log(error);
          this.setState({ isLoading: false });
        });
    }
  };

  render() {
    const { emails, title, message, errors, isLoading, isSuccessfullySubmitted } = this.state;

    return (
      <EmailPageView
        emails={emails}
        title={title}
        message={message}
        errors={errors}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default EmailPage;
