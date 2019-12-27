import React from 'react';

import Page from '../../components/common/Page';
import SearchForm from './components/SearchForm';
import Table from '../../components/common/Table';
import './style.css';

function ContactsPageView({ columns, data, onChange, onClick }) {
  return (
    <Page>
      <span>Kitya on contacts page</span>
      <SearchForm
        onChange={onChange}
        onClick={onClick}
      />
      <Table
        columns={columns}
        data={data}
      />
    </Page>
  );
}

export default ContactsPageView;
