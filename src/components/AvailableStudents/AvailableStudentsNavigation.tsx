import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  conversationSite: boolean;
}

const AvailableStudentsNavigation = (props: Props) => {
  return (
    <Nav
      className={`navigation`}
      variant="tabs"
      defaultActiveKey={`${props.conversationSite ? '2' : '1'}`}
    >
      <Nav.Item className={`nav-items`}>
        <Nav.Link as={Link} to={'/available-students'} eventKey={'1'}>
          Dostępni kursanci
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={`nav-items`}>
        <Nav.Link as={Link} to={'/conversation-students'} eventKey={'2'}>
          Do rozmowy
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export { AvailableStudentsNavigation };
