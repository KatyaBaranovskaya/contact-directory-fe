import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'

import './style.css';

function Spinner({ type }) {
  return (
    <div className="loader">
      <Loader
        type={type}
        color="#93b5d0"
        height={80}
        width={80}
      />
    </div>
  );
}

Spinner.defaultProps = {
  type: 'ThreeDots',
};

Spinner.propTypes = {
  type: PropTypes.string,
};

export default Spinner;
