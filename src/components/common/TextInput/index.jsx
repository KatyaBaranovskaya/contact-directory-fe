import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ type, name, value, onChange, className }) {
  return (
    <input
      className={className}
      type={type}
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
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TextInput;
