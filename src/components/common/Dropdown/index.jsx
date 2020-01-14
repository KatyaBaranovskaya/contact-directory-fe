import React from 'react';
import ReactDropdown from 'react-dropdown';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function Dropdown({ placeholder, value, error, options, onChange, className }) {
  const styles = {
    dropdown: classNames('dropdown', {
      'dropdown_error': error,
    }, className),
  };

  return (
    <div className="dropdown-wrapper">
      <ReactDropdown
        controlClassName={styles.dropdown}
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
        arrowClassName="dropdown-arrow"
        placeholderClassName="dropdown-placeholder"
      />
      {error && (
        <span className="dropdown__error-text">{error}</span>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Dropdown;
