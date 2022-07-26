import React from 'react';
import { Accordion, Button, ButtonGroup, Container } from 'react-bootstrap';

import './AvailableStudents.css';

const AvailableStudents = () => {
  return (
    <Container className={`custom-container mt-5`}>
      <Accordion>
        <Accordion.Item eventKey="0" className={`test`}>
          <Accordion.Header className={`test`}>
            Niesamowity Zawodnik Jujitsu
            <Button
              className={`position-absolute top-50 end-0 translate-middle-y me-5`}
              variant="danger"
            >
              Zarezwewuj rozmowę
            </Button>
          </Accordion.Header>

          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export { AvailableStudents };
