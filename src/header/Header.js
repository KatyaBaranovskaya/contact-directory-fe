import React from 'react';
import '../header/Header.css';
import classNames from "classnames";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Header({className}) {
  return (
    <Navbar className={classNames('header', className)} variant="dark">
      <Navbar.Brand href="#home">CONTACT DIRECTORY</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">CONTACTS</Nav.Link>
        <Nav.Link href="#users">USERS</Nav.Link>
        <Nav.Link href="#home">HOME</Nav.Link>
      </Nav>
      <Form inline>
        <Button variant="outline-info">LOGOUT</Button>
        <Button variant="outline-info">LOGIN</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
