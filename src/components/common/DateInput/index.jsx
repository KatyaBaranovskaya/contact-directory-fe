import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function DateInput({ placeholder, value, onChange, className }) {
  return (
    <DatePicker
      className={classNames('date-input', className)}
      placeholderText={placeholder}
      selected={value}
      onChange={onChange}
    />
  );
}

DateInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DateInput;
