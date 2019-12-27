import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, type, disabled, text, onClick }) {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >{ text }</button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.boolean,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
