import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ name, value, onChange, className }) {
  return (
    <textarea
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Textarea;
