import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, type, onClick }) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    />
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
