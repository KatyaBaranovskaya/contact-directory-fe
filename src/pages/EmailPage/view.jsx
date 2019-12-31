import React from 'react';

import Page from '../../components/common/Page';
import EmailForm from './components/EmailForm';
import './style.css';

function EmailPageView({ email, text, onChange, onClick }) {
  return (
    <Page className="email-page__content">
      <EmailForm
        email={email}
        text={text}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default EmailPageView;
