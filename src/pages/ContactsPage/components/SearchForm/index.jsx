import React from 'react';

import { Button, TextInput, DateInput, Dropdown } from '../../../../components/common';
import './style.css';

function SearchForm({
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
                      onClearClick
                    }) {
  return (
    <div className="search-form">
      <div className="search-form__fields-wrapper">
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
        <Dropdown
          placeholder="Gender"
          value={gender}
          options={options}
          onChange={onGenderChange}
        />
        <DateInput
          placeholder="Birthday"
          value={birthday}
          onChange={onBirthdayChange}
        />
        <TextInput
          placeholder="Country"
          name="country"
          type="text"
          value={country}
          onChange={onChange}
        />
      </div>
      <div>
        <Button
          className="search-form__submit-btn"
          disabled={isLoading || isSuccessfullySubmitted}
          onClick={onSearchClick}
          text="SEARCH"
        />
        <Button
          className="search-form__clear-btn"
          disabled={isLoading || isSuccessfullySubmitted}
          onClick={onClearClick}
          text="CLEAR"
        />
      </div>
    </div>
  );
}

export default SearchForm;
