import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";

// import {NavDropdown} from "react-bootstrap";


function NavBar(props) {


        return(
            <Navbar bg="light" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">Learn New Skills!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Sign In</Nav.Link>
                    <Nav.Link href="#register">Sign Up</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
}

export default NavBar;