import React from 'react';
import { Page } from '../../components/common';
import { Link } from '@reach/router';

import './style.css';

function ErrorPageView({ error }) {
  return (
    <Page className="error-page__content">
      {error && (
        <p className="error-page__error-message">ERROR: {error}</p>
      )}
      <Link className="error-page__link" to="/">Go Home</Link>
    </Page>
  );
}

export default ErrorPageView;
