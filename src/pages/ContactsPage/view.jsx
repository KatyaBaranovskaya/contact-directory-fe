import React from 'react';

import Page from '../../components/common/Page';
import SearchForm from './components/SearchForm';
import Table from '../../components/common/Table';
import Pagination from '../../components/common/Pagination';
import './style.css';
import Button from '../../components/common/Button/index';

function ContactsPageView({ onCreateClick, onDeleteClick, onSendClick, columns, data, pageCount, onPageChange }) {
  return (
    <Page className="contacts-page__content">
      <SearchForm />
      <div className="contacts-page__button-wrapper">
        <Button className="btn" onClick={onCreateClick} text="CREATE" />
        <Button className="btn" onClick={onDeleteClick} text="DELETE" />
        <Button className="btn" onClick={onSendClick} text="SEND EMAIL" />
      </div>
      <Table
        columns={columns}
        data={data}
      />
      <Pagination
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
    </Page>
  );
}

export default ContactsPageView;
