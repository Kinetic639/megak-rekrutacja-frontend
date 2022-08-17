import React, { useEffect, useState } from 'react';
import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Spinner,
} from 'react-bootstrap';

import './Header.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { validateCurrUserAsync } from '../../redux/features/userSlice';
import { useNavigate } from 'react-router';
import {Link} from "react-router-dom";

interface ResGitHub {
  name?: string;
  avatar_url?: string;
}
const Header = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();
  const gitHubUser = useAppSelector((state) => state.user.user);

  if (gitHubUser?.githubUsername !== undefined) {
    useEffect(() => {
      setLoading(true);
      (async () => {
        try {
          const res = await fetch(
              `https://api.github.com/users/${gitHubUser?.githubUsername}`,
          );
          const resDataGitHub = await res.json();
          setResDataGitHub(resDataGitHub);
        } finally {
          setLoading(false);
        }
      })();
    }, []);
  }
  const avatar = (
    <img
      src={
        resDataGitHub?.avatar_url === undefined
          ? 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
          : resDataGitHub.avatar_url
      }
      width="40"
      height="40"
      className="d-inline-block align-top navbar-color avatar"
      alt={
        resDataGitHub?.name === undefined
          ? 'avatar-domyślny'
          : 'avatar' + resDataGitHub.avatar_url
      }
      key={'user-avatar-key'}
    />
  );

  const name = ` ${gitHubUser?.firstName} ${gitHubUser?.lastName}`;

  const logOut = async () => {
    const res = await fetch('http://localhost:3001/auth/logout', {
      credentials: 'include',
    });
    const resJson = await res.json();
    if (resJson.message === 'Wylogowano') {
      await dispatch(validateCurrUserAsync());
      nav('/login');
    }
  };

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
          <Navbar.Brand as={Link} to={'/dashboard'} className={`navbar-color`}>
            <img
              src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
              width="89"
              height="55"
              className="d-inline-block align-top navbar-color"
              alt="MegaK Logo"
            />
          </Navbar.Brand>
          <Nav>
            {loading ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              <NavDropdown
                title={[avatar, name]}
                id="collasible-nav-dropdown"
                className={`text-white fs-4`}
              >
                <NavDropdown.Item
                  className={`text-white fs-5`}
                  href="/auth/user-form"
                >
                  Konto
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={`text-white fs-5`}
                  onClick={logOut}
                >
                  Wyloguj
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export { Header };
