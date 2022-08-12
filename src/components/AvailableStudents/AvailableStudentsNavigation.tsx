import React from 'react';
import { Nav } from 'react-bootstrap';

const AvailableStudentsNavigation = () => {
  return (
    <Nav className={`navigation`} variant="tabs" defaultActiveKey="link-1">
      <Nav.Item className={`nav-items`}>
        <Nav.Link eventKey="link-1">Dostępni kursanci</Nav.Link>
      </Nav.Item>
      <Nav.Item className={`nav-items`}>
        <Nav.Link eventKey="link-2">Zarezerwowani kursanci</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export { AvailableStudentsNavigation };
