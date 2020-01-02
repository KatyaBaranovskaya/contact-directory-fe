import React from 'react';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function DateInput({ value, onChange, className }) {
  return (
    <DatePicker
      className={classNames('date-input', className)}
      // selected={value}
      onChange={onChange}
    />
  );
}

DateInput.propTypes = {
  // value: PropTypes.,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DateInput;
