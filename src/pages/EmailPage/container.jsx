import React from 'react';
import queryString from 'query-string'
import { NotificationManager } from 'react-notifications';
import { navigate } from '@reach/router';

import EmailPageView from './view';
import ApiService from '../../services/apiService';

class EmailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emails: '',
      title: '',
      message: '',
      isLoading: false,
      isSuccessfullySubmitted: false,
    };
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    const { ids } = queryParams;
    if (ids){
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
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { isValid } = this.validate();

    if (isValid) {
      this.submit();
    }
  };

  validate = () => {
    return {
      errors: [],
      isValid: true,
    };
  };

  submit = () => {
    const { emails, title, message } = this.state;
    this.setState({ isLoading: true });
    ApiService.call({
      method: 'post',
      url: '/contacts/email',
      data: { emails: emails.split(','), title, message }
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
    const { emails, title, message, isLoading, isSuccessfullySubmitted } = this.state;

    return (
      <EmailPageView
        emails={emails}
        title={title}
        message={message}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

export default EmailPage;
