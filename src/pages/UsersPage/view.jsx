import React from 'react';

import { Page, Table } from '../../components/common';
import SearchForm from './components/SearchForm';
import './style.css';

function UsersPageView({
  surname,
  lastname,
  active,
  options,
  isLoading,
  isSuccessfullySubmitted,
  onChange,
  onActiveChange,
  onSearchClick,
  onClearClick,
  columns,
  data,
  pageCount,
  onPageChange
}) {
  return (
    <Page className="users-page__content">
      <SearchForm
        surname={surname}
        lastname={lastname}
        active={active}
        options={options}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={onChange}
        onActiveChange={onActiveChange}
        onSearchClick={onSearchClick}
        onClearClick={onClearClick}
      />
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
