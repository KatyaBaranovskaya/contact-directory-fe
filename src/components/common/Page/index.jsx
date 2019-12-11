import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import './style.css';
import classNames from "classnames";

function Page({ className, children }) {
  return (
    <div className="page__wrapper">
      <Header className="page__header" />
      <div className={classNames('page__content', className)}>
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
