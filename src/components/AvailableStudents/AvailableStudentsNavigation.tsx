import React from 'react';
import { Nav } from 'react-bootstrap';

interface Props {
    setHrDashboardSwitch: React.Dispatch<React.SetStateAction<boolean>>;
    hrDashboardSwitch: boolean;
}

const AvailableStudentsNavigation = (props: Props) => {
  return (
    <Nav className={`navigation`} variant="tabs" defaultActiveKey={`${props.hrDashboardSwitch ? '2' : '1'}`}>
      <Nav.Item className={`nav-items`}>
        <Nav.Link onClick={() => props.setHrDashboardSwitch(false)} className={'p-4'} eventKey="1">
          Dostępni kursanci
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={`nav-items`}>
        <Nav.Link onClick={() => props.setHrDashboardSwitch(true)} className={'p-4'} eventKey="2">
          Zarezerwowani kursanci
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export { AvailableStudentsNavigation };
