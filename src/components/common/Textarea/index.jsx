import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function Textarea({ placeholder, name, value, onChange, className }) {
  return (
    <textarea
      className={classNames('textarea', className)}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Textarea;
