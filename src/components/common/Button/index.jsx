import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function Button({ className, type, disabled, text, onClick }) {
  return (
    <button
      className={classNames('button', className)}
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
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
