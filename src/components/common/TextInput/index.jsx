import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function TextInput({ type, placeholder, name, value, error, onChange, className }) {
  const styles = {
    input: classNames('text-input', {
      'text-input_error': error,
    }, className),
  };

  return (
    <div className="text-input-wrapper">
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <span className="text-input__error-text">{error}</span>
      )}
    </div>
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
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TextInput;
