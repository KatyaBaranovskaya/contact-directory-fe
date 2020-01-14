import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'

import './style.css';

function Spinner({ type, color }) {
  return (
    <div className="spinner">
      <Loader
        type={type}
        color={color}
        height={80}
        width={80}
      />
    </div>
  );
}

Spinner.defaultProps = {
  type: 'ThreeDots',
  color: "#93b5d0",
};

Spinner.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

export default Spinner;
