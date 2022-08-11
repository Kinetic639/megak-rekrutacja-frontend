import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { apiUrl } from '../../config/api';

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
  githubUsername: string;
}

interface Props {
  userListResHr: UserListResponseHr[];
  setChangeStudentStatus: React.Dispatch<React.SetStateAction<boolean>>;
  conversationSite: boolean;
}
interface ResGitHub {
  name?: string;
  avatar_url?: string;
}
const AvailableStudentsTableElements = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();

  const reservedUserHandler = async (studentId: string) => {
    const res = await fetch(`${apiUrl}/student/deactivation`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: studentId,
        active: 0,
      }),
    });
    const dataDeactivationRes = await res.json();
    props.setChangeStudentStatus(true);
    console.log(dataDeactivationRes);
  };
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

    if (props.conversationSite) {
      useEffect(() => {
        setLoading(true);
        (async () => {
          try {
            const res = await fetch(
              `https://api.github.com/users/FrostKiller666`,
            );
            const resDataGitHub = await res.json();
            setResDataGitHub(resDataGitHub);
          } finally {
            setLoading(false);
          }
        })();
      }, []);
    }
    const avatar = (
      <img
        src={
          resDataGitHub?.avatar_url === undefined
            ? 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
            : resDataGitHub.avatar_url
        }
        width="30"
        height="30"
        className="d-inline-block align-top navbar-color avatar"
        alt={
          resDataGitHub?.name === undefined
            ? 'avatar-domyślny'
            : 'avatar' + resDataGitHub.avatar_url
        }
        key={'user-avatar-key'}
      />
    );
    return (
      <Accordion key={data.id}>
        <Accordion.Item eventKey={String(index)}>
          {props.conversationSite ? (
            <>
              <Accordion.Header>
                <div>
                  <p>Rezerwacja do:</p>
                  <p>11.09.2022r.</p>
                </div>
                <div>{avatar}</div>
                <div>
                  {data.firstName} {data.lastName}
                </div>
                <Button
                  className={`custom-button-2`}
                  as={'div'}
                  variant="danger"
                >
                  Zatrudniony
                </Button>
                <Button
                  className={`custom-button-3`}
                  as={'div'}
                  variant="danger"
                >
                  Brak zainteresowania
                </Button>
                <Button
                  className={`custom-button-4`}
                  as={'div'}
                  variant="danger"
                >
                  Pokaż CV
                </Button>
              </Accordion.Header>
            </>
          ) : (
            <Accordion.Header>
              {data.firstName} {data.lastName}
              <Button
                className={`custom-button`}
                as={'div'}
                variant="danger"
                onClick={() => reservedUserHandler(data.id)}
              >
                Zarezwewuj rozmowę
              </Button>
            </Accordion.Header>
          )}
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
          {props.conversationSite ? <></> : <p />}
        </Accordion.Item>
      </Accordion>
    );
  });
  return <> {elementList} </>;
};

export { AvailableStudentsTableElements };
