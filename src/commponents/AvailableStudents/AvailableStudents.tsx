import React from 'react';
import {
  Accordion,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

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
            <Container fluid>
              <Row className={'p-3 row-main row-cols-8'}>
                <Col>Ocena przejścia kursu</Col>
                <Col>Ocena aktywności i zaangażowania na kursie</Col>
                <Col>Ocena kodu w projekcie własnym</Col>
                <Col>Ocena pracy w zespole Scrum</Col>
                <Col>Preferowane miejsce pracy</Col>
                <Col>Docelowe miasto, gdzie chce pracować kandydat</Col>
                <Col>Oczekiwant typ kontraktu</Col>
                <Col>Oczekiwane wynagrodzenie miesięczne netto</Col>
              </Row>
              <Row className={'p-3 row-second'}>
                <Col>5/5</Col>
                <Col>3/5</Col>
                <Col>4/5</Col>
                <Col>5/5</Col>
                <Col>Biuro</Col>
                <Col>Warszawa</Col>
                <Col>Ummowa o pracę</Col>
                <Col>8 000 zł</Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export { AvailableStudents };
