import React, { useState } from 'react';
import { Accordion, Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

interface UserListResponseHr {
  id: string;
  email: string;
  courseCompletion: string;
  courseEngagement: string;
  projectDegree: string;
  teamProjectDegree: string;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: string;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: string;
  firstName: string;
  lastName: string;
}

interface Props {
  userListResHr: UserListResponseHr[];
}

const AvailableStudentsTableElements = (props: Props) => {
  const elementList = props.userListResHr.map((data, index) => {
    data.targetWorkCity === null
      ? (data.targetWorkCity = 'BRAK')
      : data.targetWorkCity;
    data.expectedSalary === null
      ? (data.expectedSalary = 'BRAK')
      : data.expectedSalary;
    data.expectedTypeWork === 'default'
      ? (data.expectedTypeWork = 'BRAK')
      : data.expectedTypeWork;
    data.expectedContractType === 'default'
      ? (data.expectedContractType = 'BRAK')
      : data.expectedContractType;
    return (
      <Accordion key={data.id}>
        <Accordion.Item eventKey={String(index)}>
          <Accordion.Header>
            {data.firstName} {data.lastName}
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
                    {data.courseCompletion}
                    <span className={`row-second-span`}>/5</span>
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
                    {data.courseEngagement}
                    <span className={`row-second-span`}>/5</span>
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
                    {data.projectDegree}
                    <span className={`row-second-span`}>/5</span>
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
                    {data.teamProjectDegree}
                    <span className={`row-second-span`}>/5</span>
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
                  <Col className={`accordion-body-color`}>
                    {data.expectedTypeWork}
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
                    Docelowe miasto, gdzie chce pracować kandydat
                  </Col>
                </Row>
                <Row
                  className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                >
                  <Col className={`accordion-body-color`}>
                    {data.targetWorkCity}
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
                    Oczekiwant typ kontraktu
                  </Col>
                </Row>
                <Row
                  className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                >
                  <Col className={`accordion-body-color`}>
                    {data.expectedContractType}
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
                    Oczekiwane wynagrodzenie miesięczne netto
                  </Col>
                </Row>
                <Row
                  className={'pb-3 ps-1 pe-1 row-second accordion-body-color'}
                >
                  <Col className={`accordion-body-color`}>
                    {data.expectedSalary}
                    {data.expectedSalary === 'BRAK' ? '' : ' zł'}
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Accordion.Body>
          <p />
        </Accordion.Item>
      </Accordion>
    );
  });
  return <> {elementList} </>;
};

export { AvailableStudentsTableElements };
