import React from 'react';
import queryString from 'query-string'

import ErrorPageView from './view';

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);

    const queryParams = queryString.parse(this.props.location.search);
    const { error } = queryParams;

    this.state = {
      error: error ? error : null,
    };
  }

  render() {
    const { error } = this.state;

    return (
      <ErrorPageView error={error} />
    );
  }
}

export default ErrorPage;
