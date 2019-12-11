import React from 'react';

import Page from '../../components/common/Page';
import './style.css';
import EmailForm from "./components/EmailForm";

function EmailPageView({ email, text, onChange, onClick }) {
  return (
    <Page className="email-page-content">
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
