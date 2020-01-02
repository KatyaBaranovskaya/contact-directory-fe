import React from 'react';

import { Button, TextInput } from '../../../../components/common';
import './style.css';
import DateInput from '../../../../components/common/DateInput';

function SearchForm({ name, surname, lastname, gender, birthday, country, isLoading, isSuccessfullySubmitted, onChange, onSearchClick }) {
  return (
    <div className="search-form">
      <TextInput
        placeholder="Name"
        name="name"
        type="text"
        value={name}
        onChange={onChange}
      />
      <TextInput
        placeholder="Surname"
        name="surname"
        type="text"
        value={surname}
        onChange={onChange}
      />
      <TextInput
        placeholder="Patronymic"
        name="lastname"
        type="text"
        value={lastname}
        onChange={onChange}
      />
      <TextInput
        placeholder="Gender"
        name="gender"
        type="text"
        value={gender}
        onChange={onChange}
      />
      {/*<DateInput*/}
        {/*placeholder="Birthday"*/}
        {/*name="birthday"*/}
        {/*value={birthday}*/}
        {/*onChange={onChange}*/}
      {/*/>*/}
      <TextInput
        placeholder="Country"
        name="country"
        type="text"
        value={country}
        onChange={onChange}
      />
      <Button
        disabled={isLoading || isSuccessfullySubmitted}
        onClick={onSearchClick}
        text="SEARCH"
      />
    </div>
  );
}

export default SearchForm;
