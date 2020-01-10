import React from 'react';

import { Page, ContactForm } from '../../components/common';
import './style.css';

function ContactCreationPageView({ onSubmit }) {
  return (
    <Page>
      <ContactForm
        onSubmit={onSubmit}
      />
    </Page>
  );
}

export default ContactCreationPageView;
