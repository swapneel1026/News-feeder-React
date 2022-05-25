import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/headlines">
            News~Feeder
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/national">
                National
              </Nav.Link>

              <Nav.Link as={NavLink} to="/technology">
                Technology
              </Nav.Link>
              <Nav.Link as={NavLink} to="/politics">
                Politics
              </Nav.Link>
              <Nav.Link as={NavLink} to="/international">
                International
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sports">
                Sports
              </Nav.Link>
              <Nav.Link as={NavLink} to="/startup">
                HealthCare
              </Nav.Link>
            </Nav>
            <Nav className="me"></Nav>
          </Navbar.Collapse>
          <Navbar.Brand
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "15rem",
            }}
          >
            <h5>Follow Us:</h5>
            <FacebookIcon style={{ color: "white" }} />
            <TwitterIcon style={{ color: "white" }} />
            <InstagramIcon style={{ color: "white" }} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
