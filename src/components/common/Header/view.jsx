import React from 'react';
import classNames from 'classnames';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from '@reach/router';


import Button from '../Button';
import './style.css';

function HeaderView({ isAuthorized, className, onLogoutClick }) {
  return (
    <Navbar className={classNames('header', className)} variant="dark">
      <Link to="/">CONTACT DIRECTORY</Link>
      {isAuthorized && (
        <Nav className="mr-auto">
          <Link to="/contacts">CONTACTS</Link>
          <Link to="/users">USERS</Link>
        </Nav>
      )}
      {isAuthorized
        ? <Button className="style" onClick={onLogoutClick} text="LOGOUT" />
        : <Link to="/login">LOGIN</Link>
      }
    </Navbar>
  );
}

export default HeaderView;
