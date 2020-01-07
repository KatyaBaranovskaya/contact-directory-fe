import React  from 'react';

import { Button, TextInput, Dropdown } from  '../../../../components/common';
import './style.css';

function SearchForm({ surname, lastname, active, options, isLoading, isSuccessfullySubmitted, onChange, onActiveChange, onSearchClick, onClearClick }) {
  return (
    <div className="search-form">
      <div className="search-form__fields-wrapper">
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
          placeholder="Select status"
          value={active}
          options={options}
          onChange={onActiveChange}
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
