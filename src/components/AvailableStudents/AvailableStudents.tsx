import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import './AvailableStudents.css';
import { apiUrl } from '../../config/api';

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
  const [studentsListPerPage, setStudentsListPerPage] = useState(10);

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
  //console.log(resDataUserList);
  return (
    <>
      {loading ? (
        <></>
      ) : (
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
          <Container className={`mt-5 mb-1 custom-container-second p-0`}>
            <p>Ilość elementów</p>
          </Container>
          <Form.Select
            aria-label="Default select example"
            style={{
              width: '80px',
            }}
          >
            <option value="1">5</option>
            <option value="2">10</option>
            <option value="3">15</option>
          </Form.Select>
        </>
      )}
    </>
  );
};

export { AvailableStudents };
