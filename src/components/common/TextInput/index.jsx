import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function TextInput({ type, placeholder, name, value, onChange, className }) {
  return (
    <input
      className={classNames(className || 'text-input')}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

TextInput.defaultProps = {
  type: 'text',
};

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TextInput;
