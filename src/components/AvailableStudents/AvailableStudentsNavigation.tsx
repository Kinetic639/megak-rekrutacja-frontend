import React from 'react';
import { Nav } from 'react-bootstrap';

const AvailableStudentsNavigation = () => {
  return (
    <Nav className={`navigation`} variant="tabs" defaultActiveKey="link-1">
      <Nav.Item className={`nav-items `}>
        <Nav.Link className={'p-4'} eventKey="link-1">Dostępni kursanci</Nav.Link>
      </Nav.Item>
      <Nav.Item className={`nav-items`}>
        <Nav.Link className={'p-4'} eventKey="link-2">Do rozmowy</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export { AvailableStudentsNavigation };
