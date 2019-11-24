import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import './style.css';

function Page({ children }) {
  return (
    <div className="page__wrapper">
      <Header className="page__header" />
      <div className="page__content">
        {children}
      </div>
      <Footer className="page__footer" />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
