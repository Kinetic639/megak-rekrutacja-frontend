import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import './AvailableStudents.css';
import { apiUrl } from '../../config/api';
import { AvailableStudentsTableElements } from './AvailableStudentsTableElements';
import { AvailableStudentsSearch } from './AvailableStudentsSearch';
import { AvailableStudentsNavigation } from './AvailableStudentsNavigation';

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

const AvailableStudents = () => {
  const [loading, setLoading] = useState(false);
  const [resDataUserList, setResDataUserList] = useState<UserListResponseHr[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsListPerPage, setStudentsListPerPage] = useState(3);

  const indexOfLastStudentsList = currentPage * studentsListPerPage;
  const indexOfFirstStudentsList =
    indexOfLastStudentsList - studentsListPerPage;

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/user/list/basic`);
        const data: UserListResponseHr[] = await res.json();
        setResDataUserList(data);
        //console.log(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Container className={`mt-5 mb-1 custom-container-second p-0`}>
        <AvailableStudentsNavigation />
      </Container>
      <Container className={`custom-container mt-1`}>
        <AvailableStudentsSearch
          userListResHr={resDataUserList}
          indexOfLastStudentsList={indexOfLastStudentsList}
          indexOfFirstStudentsList={indexOfFirstStudentsList}
        />
      </Container>
    </>
  );
};

export { AvailableStudents };
