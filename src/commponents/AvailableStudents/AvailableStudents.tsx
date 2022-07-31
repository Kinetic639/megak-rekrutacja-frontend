import React from 'react';
import {
  Accordion,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  Image,
  Nav,
  Row,
} from 'react-bootstrap';

import './AvailableStudents.css';

const AvailableStudents = () => {
  return (
    <>
      <Container className={`mt-5 mb-1 custom-container-second p-0`}>
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
      </Container>
      <Container className={`custom-container mt-1`}>
        <Nav
          style={{
            backgroundColor: '#292A2B',
          }}
          className={`mt-2`}
        >
          <Form className="d-flex">
            <div className={`wrapper`}>
              <div className={`icon`}></div>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  backgroundColor: '#1e1e20',
                }}
              />
            </div>
          </Form>
        </Nav>
        <p
          style={{
            height: '4px',
            backgroundColor: '#1e1e21',
          }}
          className={'mt-3'}
        />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Niesamowity Zawodnik Jujitsu
              <Button
                className={`position-absolute top-50 end-0 translate-middle-y me-5 custom-button`}
                variant="danger"
              >
                Zarezwewuj rozmowę
              </Button>
            </Accordion.Header>
            <Accordion.Body>
              <Container fluid>
                <Row className={'p-3 row-main row-cols-8 accordion-body-color'}>
                  <Col className={`accordion-body-color`}>
                    Ocena przejścia kursu
                  </Col>
                  <Col className={`accordion-body-color`}>
                    Ocena aktywności i zaangażowania na kursie
                  </Col>
                  <Col className={`accordion-body-color`}>
                    Ocena kodu w projekcie własnym
                  </Col>
                  <Col className={`accordion-body-color`}>
                    Ocena pracy w zespole Scrum
                  </Col>
                  <Col className={`accordion-body-color`}>
                    Preferowane miejsce pracy
                  </Col>
                  <Col className={`accordion-body-color`}>
                    Docelowe miasto, gdzie chce pracować kandydat
                  </Col>
                  <Col className={`accordion-body-color`}>
                    Oczekiwant typ kontraktu
                  </Col>
                  <Col className={`accordion-body-color`}>
                    Oczekiwane wynagrodzenie miesięczne netto
                  </Col>
                </Row>
                <Row className={'p-3 row-second accordion-body-color'}>
                  <Col className={`accordion-body-color`}>
                    <span className={`row-second-span`}>5</span>/5
                  </Col>
                  <Col className={`accordion-body-color`}>
                    <span className={`row-second-span`}>4</span>/5
                  </Col>
                  <Col className={`accordion-body-color`}>
                    <span className={`row-second-span`}>3</span>/5
                  </Col>
                  <Col className={`accordion-body-color`}>
                    <span className={`row-second-span`}>2</span>/5
                  </Col>
                  <Col className={`accordion-body-color`}>Biuro</Col>
                  <Col className={`accordion-body-color`}>Warszawa</Col>
                  <Col className={`accordion-body-color`}>Ummowa o pracę</Col>
                  <Col className={`accordion-body-color`}>8 000 zł</Col>
                </Row>
              </Container>
            </Accordion.Body>
            <p />
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export { AvailableStudents };
