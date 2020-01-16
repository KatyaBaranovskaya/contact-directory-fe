import React from 'react';
import queryString from 'query-string'
import { NotificationManager } from 'react-notifications';
import { navigate } from '@reach/router';
import pick from 'lodash/pick';

import EmailPageView from './view';
import ApiService from '../../services/apiService';
import { validate } from '../../helpers/validation';
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
    const data = pick(this.state, ['emails', 'title', 'message']);
    const { name, value } = event.target;

    data[name] = value;

    const { errors } = validate(schema, data);

    this.setState({ [name]: value, errors });
  };

  handleSubmit = () => {
    const { emails, title, message } = this.state;
    const data = { emails, title, message };

    const { errors, isValid } = validate(schema, data);
    this.setState({ errors });

    if (!isValid) {
      return;
    }

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
