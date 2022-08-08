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

interface ResGitHub {
  name?: string;
  avatar_url?: string;
}
const Header = () => {
  const [loading, setLoading] = useState(true);
  const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();
  const gitHubUsername = useAppSelector(
    (state) => state.user.user.githubUsername,
  );
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${gitHubUsername}`,
        );
        const resDataGitHub = await res.json();
        setResDataGitHub(resDataGitHub);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
                  href="#action/3.1"
                >
                  Konto
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className={`text-white fs-5`}>
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
