import React from 'react';

import Page from '../../components/common/Page';
import SearchForm from './components/SearchForm';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';
import './style.css';

function ContactsPageView({ onCreateClick, onDeleteClick, onSendClick, columns, data, pageCount, onPageChange }) {
  return (
    <Page className="contacts-page__content">
      <SearchForm />
      <div className="contacts-page__button-wrapper">
        <Button onClick={onCreateClick} text="CREATE" />
        <Button onClick={onDeleteClick} text="DELETE" />
        <Button onClick={onSendClick} text="SEND EMAIL" />
      </div>
      <Table
        columns={columns}
        data={data}
        pageCount={pageCount}
        onPageChange={onPageChange}
        className="contacts-page__table"
      />
    </Page>
  );
}

export default ContactsPageView;
