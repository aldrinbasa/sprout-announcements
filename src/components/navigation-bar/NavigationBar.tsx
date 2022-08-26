import React from "react";
import "./NavigationBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import sproutLogo from "../../assets/sprout-logo.png";
import profileImage from "../../assets/profile-image.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="nav-bar"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand>
          <img className="nav-bar-logo" src={sproutLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HR</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="My Requests" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="My Team" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Administration Tools"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Maintenance" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <input placeholder="employee search"></input>
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
            <Button variant="outline-light">
              <FontAwesomeIcon icon={faBell} />
            </Button>

            <img
              className="rounded-circle nav-bar-profile"
              src={profileImage}
            />
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
