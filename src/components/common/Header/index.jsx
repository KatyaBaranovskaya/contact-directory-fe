import React from 'react';
import './style.css';
import classNames from "classnames";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "@reach/router";

function Header({className}) {
  return (
    <Navbar className={classNames('header', className)} variant="dark">
      <Navbar.Brand href="#home">CONTACT DIRECTORY</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/contacts">CONTACTS</Link>
        <Link to="/users">USERS</Link>
        <Link to="/">HOME</Link>
      </Nav>
      <Form inline>
        {/*<Link to="login">LOGOUT</Link>*/}
        <Link to="/login">LOGIN</Link>
      </Form>
    </Navbar>
  );
}

export default Header;
