import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate();

  const logOut = async () => {
    const res = await fetch('http://localhost:3001/auth/logout', {
      credentials: 'include',
    });
    const resJson = await res.json();
    if (resJson.message === 'Logout successful') {
      nav('/auth/login');
    }
  };

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
    <Container fluid className={`navbar-color p-0`}>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        className={`navbar-color`}
        expand="md"
      >
        <Container className={`navbar-color container-header-second`}>
          <Navbar.Brand href="#home" className={`navbar-color`}>
            <img
              src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
              width="89"
              height="55"
              className="d-inline-block align-top navbar-color"
              alt="MegaK Logo"
            />
          </Navbar.Brand>

          <Nav className="nav-main">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GXJmEd1lp6TBZONJN90qkvfVYy_ZDb6nww&usqp=CAU"
              width="40"
              height="36"
              className="avatar"
              alt="MegaK Logo"
            />
            <NavDropdown
              title={name}
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
                <button className="button" onClick={logOut}>
                  Wyloguj
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export { Header };
