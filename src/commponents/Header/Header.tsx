import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './Header.css';

const Header = () => {
  const avatar = (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GXJmEd1lp6TBZONJN90qkvfVYy_ZDb6nww&usqp=CAU"
      width="40"
      height="36"
      className="d-inline-block align-top navbar-color"
      alt="MegaK Logo"
    />
  );
  const name = ' Kaskader Rewolucjonista';

  return (
    <Container fluid className={`navbar-color`}>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        className={`navbar-color`}
      >
        <Container className={`navbar-color container-header-second`}>
          <Navbar.Brand href="#home" className={`navbar-color`}>
            <img
              src="https://platforma.megak.pl/public/ui/logo.png"
              width="89"
              height="55"
              className="d-inline-block align-top navbar-color"
              alt="MegaK Logo"
            />
          </Navbar.Brand>

          <Nav>
            <NavDropdown
              title={[avatar, name]}
              id="collasible-nav-dropdown"
              className={`text-white fs-4`}
            >
              <NavDropdown.Item
                className={`text-white fs-5`}
                href="#action/3.1"
              >
                Konto
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={`text-white fs-5`}>
                Wyloguj
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export { Header };
