import React from 'react';
import ReactToggle from 'react-toggle';
import PropTypes from 'prop-types';

function Toggle({ checked, onChange }) {
  return (
      <ReactToggle
        checked={checked}
        onChange={onChange}
      />
  );
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
