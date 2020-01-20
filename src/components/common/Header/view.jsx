import React from 'react';
import classNames from 'classnames';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from '@reach/router';

import Button from '../Button';
import { Roles } from '../../../consts/roles';
import './style.css';

function HeaderView({ isAuthorized, role, className, onLogoutClick }) {
  return (
    <Navbar className={classNames('header', className)} variant="dark">
      <Link className="header__logo" to="/">CONTACT DIRECTORY</Link>
      {isAuthorized && (
        <Nav className="mr-auto header__nav">
          <Link className="header__link" to="/contacts">CONTACTS</Link>
          {role === Roles.ADMIN && (
            <Link className="header__link" to="/users">USERS</Link>
          )}
        </Nav>
      )}
      {isAuthorized
        ? <Button className="header__btn" onClick={onLogoutClick} text="LOGOUT" />
        : <Link className="header__btn" to="/login">LOGIN</Link>
      }
    </Navbar>
  );
}

export default HeaderView;
