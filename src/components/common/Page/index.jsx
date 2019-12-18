import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import './style.css';
import classNames from "classnames";
import {TokenContext} from '../../handlers/TokenProvider/index';

function Page({className, children}) {
  return (
    <TokenContext.Consumer>
      <div className="page__wrapper">
        <Header className="page__header"/>
        <div className={classNames('page__content', className)}>
          {children}
        </div>
        <Footer className="page__footer"/>
      </div>
    </TokenContext.Consumer>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
