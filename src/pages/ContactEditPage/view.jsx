import React from 'react';

import { Page, ContactForm, Spinner } from '../../components/common';
import './style.css';

function ContactEditPageView({ initialData, isLoaded, onSubmit }) {
  return (
    <Page>
      {isLoaded
        ? <ContactForm initialData={initialData} onSubmit={onSubmit} />
        : <Spinner type="ThreeDots" />
      }
    </Page>
  );
}

export default ContactEditPageView;
