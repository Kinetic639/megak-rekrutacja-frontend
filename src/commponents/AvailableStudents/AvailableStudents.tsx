import React from 'react';
import {
  Accordion,
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
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
              <Button className={`custom-button`} variant="danger">
                Zarezwewuj rozmowę
              </Button>
            </Accordion.Header>
            <Accordion.Body>
              <CardGroup>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Ocena przejścia kursu
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>
                      5<span className={`row-second-span`}>/5</span>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Ocena aktywności i zaangażowania na kursie
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>
                      5<span className={`row-second-span`}>/4</span>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Ocena kodu w projekcie własnym
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>
                      5<span className={`row-second-span`}>/3</span>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Ocena pracy w zespole Scrum
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>
                      5<span className={`row-second-span`}>/2</span>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Preferowane miejsce pracy
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>Biuro</Col>
                  </Row>
                </Card>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Docelowe miasto, gdzie chce pracować kandydat
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>Warszawa</Col>
                  </Row>
                </Card>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Oczekiwant typ kontraktu
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>Ummowa o pracę</Col>
                  </Row>
                </Card>
                <Card>
                  <Row
                    className={
                      'pt-3 pb-1 ps-1 pe-1 row-main accordion-body-color'
                    }
                  >
                    <Col className={`accordion-body-color`}>
                      Oczekiwane wynagrodzenie miesięczne netto
                    </Col>
                  </Row>
                  <Row
                    className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                  >
                    <Col className={`accordion-body-color`}>8 000 zł</Col>
                  </Row>
                </Card>
              </CardGroup>
            </Accordion.Body>
            <p />
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export { AvailableStudents };
