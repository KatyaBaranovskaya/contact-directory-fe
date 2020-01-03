import React from 'react';

import Page from '../../components/common/Page';
import SearchForm from './components/SearchForm';
import Table from '../../components/common/Table';
import './style.css';

function UsersPageView({ columns, data, pageCount, onPageChange }) {
  return (
    <Page className="users-page__content">
      <SearchForm />
      <Table
        columns={columns}
        data={data}
        pageCount={pageCount}
        onPageChange={onPageChange}
        className="users-page__table"
      />
    </Page>
  );
}

export default UsersPageView;
