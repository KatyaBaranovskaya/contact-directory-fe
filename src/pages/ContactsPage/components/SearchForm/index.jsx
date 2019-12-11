import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function SearchForm({ name, onChange, onClick }) {
  return (
    <div className="search-form">
      <h3 className="search-form__title">Search</h3>
    </div>
  );
}

export default SearchForm;
