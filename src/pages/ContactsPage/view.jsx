import React from 'react';

import Page from '../../components/common/Page';
import SearchForm from './components/SearchForm';
import './style.css';

function ContactsPageView({ name, onChange, onClick }) {
  return (
    <Page>
      <span>Kitya on contacts page</span>
      <SearchForm
        name={name}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default ContactsPageView;
