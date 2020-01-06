import React from 'react';

import { Page, Table, Button } from '../../components/common';
import SearchForm from './components/SearchForm';
import './style.css';

function ContactsPageView({
  name,
  surname,
  lastname,
  gender,
  birthday,
  country,
  options,
  isLoading,
  isSuccessfullySubmitted,
  onChange,
  onGenderChange,
  onBirthdayChange,
  onSearchClick,
  onClearClick,
  onCreateClick,
  onDeleteClick,
  onSendClick,
  columns,
  data,
  pageCount,
  onPageChange
}) {
  return (
    <Page className="contacts-page__content">
      <SearchForm
        name={name}
        surname={surname}
        lastname={lastname}
        gender={gender}
        birthday={birthday}
        country={country}
        options={options}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={onChange}
        onGenderChange={onGenderChange}
        onBirthdayChange={onBirthdayChange}
        onSearchClick={onSearchClick}
        onClearClick={onClearClick}
      />
      <div className="contacts-page__button-wrapper">
        <Button
          className="contacts-page__btn"
          onClick={onCreateClick}
          text="CREATE"
        />
        <Button
          className="contacts-page__btn"
          onClick={onDeleteClick}
          text="DELETE"
        />
        <Button
          className="contacts-page__btn"
          onClick={onSendClick}
          text="SEND EMAIL"
        />
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
