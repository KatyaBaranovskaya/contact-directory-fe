import React from 'react';
import ReactDropdown from 'react-dropdown';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function Dropdown({ placeholder, value, options, onChange, className }) {
  return (
    <ReactDropdown
      controlClassName={classNames('dropdown', className)}
      placeholder={placeholder}
      value={value}
      options={options}
      onChange={onChange}
      arrowClassName="dropdown-arrow"
    />
  );
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Dropdown;
