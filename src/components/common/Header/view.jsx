import React from 'react';
import './style.css';
import classNames from "classnames";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";
import Button from "../Button";

function HeaderView({ isAuthorized, className, onLogoutClick }) {
  return (
    <Navbar className={classNames('header', className)} variant="dark">
      <Navbar.Brand href="#home">CONTACT DIRECTORY</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/contacts">CONTACTS</Link>
        <Link to="/users">USERS</Link>
        <Link to="/">HOME</Link>
      </Nav>
      {isAuthorized
        ? <Button className="style" onClick={onLogoutClick} text="LOGOUT" />
        : <Link to="/login">LOGIN</Link>
      }
    </Navbar>
  );
}

export default HeaderView;
