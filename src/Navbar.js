import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { BsList } from 'react-icons/bs'; // Importing the Bootstrap icon component

export default function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/" className="site-title">RYNO EV</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <BsList /> {/* Adding the icon component */}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" className="nav__link">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/AboutUs" className="nav__link">About Us</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="Product1">SE03 Lite</NavDropdown.Item>
            <NavDropdown.Item href="/Product2">SE03</NavDropdown.Item>
            <NavDropdown.Item href="/Product3">SE03 Max</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/CompareAll">Compare All</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/Rentals" className="nav__link">Rentals</Nav.Link>
          <Nav.Link as={NavLink} to="/ContactUs" className="nav__link">Contact Us</Nav.Link>
          <Nav.Link href="/Pre-BookNow" className="nav__link">Pre-Book Now</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
