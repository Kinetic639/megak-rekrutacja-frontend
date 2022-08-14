import React, { useState } from 'react';
import { Accordion, Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { apiUrl } from '../../config/api';

import './AvailableStudents.css';
import { GradeTable } from '../common/GradeTable/GradeTable';
import {AccordionHeaderStudents} from "../common/AccordionHeaderStudents/AccordionHeaderStudents";
import {AccordingHeaderConversation} from "../common/AccordingHeaderConversation/AccordingHeaderConversation";
import {AccordingHeaderAdmin} from "../common/AccordingHeaderAdmin/AccordingHeaderAdmin";

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
  status: string;
  githubUsername: string;
}

interface Props {
  userListResHr: UserListResponseHr[];
  setChangeStudentStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  availableStudentsVariant: string;
  hrDashboardSwitch?: boolean;
  hrID: string;
}

const AvailableStudentsTableElements = ({
  userListResHr,
  setChangeStudentStatus,
  availableStudentsVariant,
  hrDashboardSwitch,
  hrID,
  setSearch,
}: Props) => {

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
          {(availableStudentsVariant === 'available-list' && !hrDashboardSwitch) &&
              (<>
                <AccordionHeaderStudents firstName={data.firstName} lastName={data.lastName} idStudent={data.id} status={data.status} hrID={hrID} setChangeStudentStatus={setChangeStudentStatus} setSearch={setSearch}/>
                  <Accordion.Body>
                    <GradeTable tableSize="sm" grades={grades} />
                  </Accordion.Body>
                    <p />
                </>)}
          {(availableStudentsVariant === 'available-list' && hrDashboardSwitch) &&
              (<>
                <AccordingHeaderConversation firstName={data.firstName} lastName={data.lastName} idStudent={data.id} githubUsername={data.githubUsername}/>
                <Accordion.Body>
                  <GradeTable tableSize="sm" grades={grades} />
                </Accordion.Body>
                <p />
              </>)}
          {(availableStudentsVariant === 'admin-list') &&
          (<>
            <AccordingHeaderAdmin firstName={data.firstName} lastName={data.lastName} />
            <Accordion.Body>
              <GradeTable tableSize="sm" grades={grades} />
            </Accordion.Body>
            <p />
          </>)}
        </Accordion.Item>
      </Accordion>
    );
  });
  return <> {elementList} </>;
};

export { AvailableStudentsTableElements };
