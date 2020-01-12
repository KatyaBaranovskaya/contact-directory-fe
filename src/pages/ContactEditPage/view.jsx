import React from 'react';

import { Page, ContactForm } from '../../components/common';
import './style.css';

function ContactEditPageView({ initialData, isLoaded, onSubmit }) {
  return (
    <Page>
      {isLoaded && (
        <ContactForm
          initialData={initialData}
          onSubmit={onSubmit}
        />
      )}
    </Page>
  );
}

export default ContactEditPageView;
