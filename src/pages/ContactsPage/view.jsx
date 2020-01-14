import React from 'react';
import { Link } from "@reach/router";

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
        <Link className="contacts-page__create-link" to="/contacts/create">CREATE</Link>
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
