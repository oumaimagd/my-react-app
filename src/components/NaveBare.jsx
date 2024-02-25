import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";

const NaveBare = () => {
  return (
    <div className="nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://logos-marques.com/wp-content/uploads/2024/01/Jumia-Logo.png"
              alt="logo"
              className="logoJumia"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <span className="input-group-text">
                <CiSearch />
              </span>
              <Form.Control
                type="search"
                placeholder="Search"
                className="form-control"
                aria-label="Search"
              />

              <Button className="btn-rechercher">Rechercher</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NaveBare;
