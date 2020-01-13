import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function DateInput({ placeholder, value, error, onChange, className }) {
  const styles = {
    dateInput: classNames('date-input', {
      'date-input_error': error,
    }, className),
  };

  return (
    <div className="date-input-wrapper">
      <DatePicker
        className={styles.dateInput}
        placeholderText={placeholder}
        selected={value}
        onChange={onChange}
      />
      {error && (
        <span className="date-input__error-text">{error}</span>
      )}
    </div>
  );
}

DateInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.object,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DateInput;
