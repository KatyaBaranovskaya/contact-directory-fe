import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../Header';
import Footer from '../Footer';
import { TokenContext } from '../../handlers/TokenProvider';
import './style.css';

function Page({ className, children }) {
  return (
    <TokenContext.Consumer>
      {(tokenInfo) => {
        const isAuthorized = Boolean(tokenInfo.user);
        const role = isAuthorized ? tokenInfo.user.role : null;

        return (
          <div className="page__wrapper">
            <Header className="page__header" isAuthorized={isAuthorized} role={role} />
            <div className={classNames('page__content', className)}>
              {children}
            </div>
            <Footer className="page__footer" />
          </div>
        );
      }}
    </TokenContext.Consumer>
  );
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
