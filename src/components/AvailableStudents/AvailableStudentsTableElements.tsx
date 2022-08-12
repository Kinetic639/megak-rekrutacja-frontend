import React, { useState } from 'react';
import { Accordion, Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { apiUrl } from '../../config/api';

import './AvailableStudents.css';
import { GradeTable } from '../common/GradeTable/GradeTable';

interface UserListResponseHr {
  id: string;
  email: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
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
  setChangeStudentStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvailableStudentsTableElements = ({
  userListResHr,
  setChangeStudentStatus,
}: Props) => {
  const reservedUserHandler = async (studentId: string) => {
    await fetch(`${apiUrl}/hr/reserve/${studentId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setChangeStudentStatus(true);
    // const dataDeactivationRes = await res.json();
    // console.log(dataDeactivationRes);
  };
  const elementList = userListResHr.map((data, index) => {
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

    const grades = [
      {
        name: 'Ocena przejścia kursu',
        grade: data.courseCompletion,
      },
      {
        name: 'Ocena aktywności i zaangażowania na kursie',
        grade: data.courseEngagement,
      },
      { name: 'Ocena kodu w projekcie własnym', grade: data.projectDegree },
      { name: 'Ocena pracy w zespole w Scrum', grade: data.teamProjectDegree },
      { name: 'Preferowane miejsce pracy', grade: data.expectedTypeWork },
      {
        name: 'Docelowe miasto, gdzie chce pracować kandydat',
        grade: data.targetWorkCity,
      },
      { name: 'Oczekiwany typ kontraktu', grade: data.expectedContractType },
      {
        name: 'Oczekiwane wynagrodzenie miesięczne netto',
        grade:
          Number(data.expectedSalary) === 0
            ? 'Brak danych'
            : Number(data.expectedSalary),
      },
      {
        name: 'Zgoda na odbycie bezpłatnych praktyk/stażu na początek',
        grade: data.canTakeApprenticeship ? 'Tak' : 'Nie',
      },
      {
        name: 'Komercyjne doświadczenie w programowaniu',
        grade: Number(data.monthsOfCommercialExp)
          ? `${Number(data.monthsOfCommercialExp)} miesięcy`
          : 'Brak',
      },
    ];
    return (
      <Accordion key={data.id}>
        <Accordion.Item eventKey={String(index)}>
          <Accordion.Header className="accordion-header">
            <div>
              {data.firstName} {data.lastName}
            </div>
            <div className="spacer"></div>
            <div>
              <Button
                className={`custom-button`}
                as={'div'}
                variant="danger"
                onClick={() => reservedUserHandler(data.id)}
              >
                Zobacz CV
              </Button>
              <Button
                className={`custom-button`}
                as={'div'}
                variant="danger"
                onClick={() => reservedUserHandler(data.id)}
              >
                Zarezerwuj rozmowę
              </Button>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <GradeTable tableSize="sm" grades={grades} />
          </Accordion.Body>
          <p />
        </Accordion.Item>
      </Accordion>
    );
  });
  return <> {elementList} </>;
};

export { AvailableStudentsTableElements };
