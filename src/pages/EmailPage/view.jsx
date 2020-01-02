import React from 'react';

import Page from '../../components/common/Page';
import EmailForm from './components/EmailForm';
import './style.css';

function EmailPageView({ emails, title, message, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <Page className="email-page__content">
      <EmailForm
        emails={emails}
        title={title}
        message={message}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default EmailPageView;
