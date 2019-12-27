import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ name, value, onChange, className }) {
  return (
    <textarea
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TextArea;
