import React from 'react';
import { Nav } from 'react-bootstrap';

const AvailableStudentsNavigation = () => {
  return (
    <Nav
      className={`navigation`}
      variant="tabs"
      defaultActiveKey="/available-students#"
    >
      <Nav.Item className={`nav-items`}>
        <Nav.Link href="/available-students#">Dostępni kursanci</Nav.Link>
      </Nav.Item>
      <Nav.Item className={`nav-items`}>
        <Nav.Link eventKey="link-1">Do rozmmowy</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export { AvailableStudentsNavigation };
