import React from 'react';
import ReactToggle from 'react-toggle'
import PropTypes from 'prop-types';

import './style.css';

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
