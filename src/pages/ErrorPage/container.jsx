import React from 'react';
import queryString from 'query-string'

import ErrorPageView from './view';

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    const { error } = queryParams;
    if (error) {
      this.setState({ error });
    }
  }

  render() {
    const { error } = this.state;

    return (
      <ErrorPageView error={error} />
    );
  }
}

export default ErrorPage;
