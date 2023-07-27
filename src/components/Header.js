import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import logo from "../media/a_makeitamazing_2.svg";
import navDesign from "../media/04.png";
import { Nav } from "react-bootstrap";
function Header() {
  // return (
  //   <Nav>
  //     <Nav.Item>
  //       <img src={logo} height={120} width={650} alt="Amdocs logo" />
  //     </Nav.Item>
  //     <Nav.Item>
  //       <img src={navDesign} width={250}></img>
  //     </Nav.Item>
  //   </Nav>
  // );
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Top-left logo */}
        <Navbar.Brand>
          <img
            src={logo}
            alt="Top-left logo"
            height={120}
            width={650}
            style={{ marginRight: "20px", marginLeft: "10px" }}
          />
        </Navbar.Brand>
        {/* Add other content or links in the middle of the Navbar if needed */}
        {/* Top-right logo */}
        <Navbar.Brand>
          <img
            src={navDesign}
            alt="Top-right logo"
            width={250}
            style={{ marginLeft: "300px", marginTop: "10px" }}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Header;
